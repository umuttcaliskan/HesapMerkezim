import React, { useState } from 'react';

// Katılımcıları gruplara ayırma fonksiyonu
const createGroups = (participants: string[], numberOfGroups: number): string[][] => {
  if (numberOfGroups <= 0 || numberOfGroups > participants.length) {
    alert('Geçersiz grup sayısı');
    return [];
  }
  
  const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5); // Katılımcıları karıştır
  const groups: string[][] = Array.from({ length: numberOfGroups }, () => []);

  // Katılımcıları gruplara eşit dağıt
  shuffledParticipants.forEach((participant, index) => {
    groups[index % numberOfGroups].push(participant);
  });

  return groups;
};

const RandomGroupCreator: React.FC = () => {
  const [participants, setParticipants] = useState<string>('');  // Katılımcı listesi
  const [numberOfGroups, setNumberOfGroups] = useState<number>(1);
  const [groups, setGroups] = useState<string[][]>([]);

  const handleCreateGroups = () => {
    const participantArray = participants.split(',').map((name) => name.trim()).filter((name) => name);
    const createdGroups = createGroups(participantArray, numberOfGroups);
    setGroups(createdGroups);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Rastgele Grup Oluştur</h2>

      <div className="mb-4">
        <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Katılımcıları Girin (Virgülle Ayrılmış)</label>
        <textarea
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Örnek: Ali, Ayşe, Mehmet, Zeynep"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="numberOfGroups" className="block text-sm font-medium text-gray-700">Grup Sayısını Girin</label>
        <input
          type="number"
          id="numberOfGroups"
          value={numberOfGroups}
          onChange={(e) => setNumberOfGroups(Number(e.target.value))}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          min="1"
          max={participants.split(',').length}
        />
      </div>

      <button
        onClick={handleCreateGroups}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Grupları Oluştur
      </button>
      
      {groups.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold text-center">Oluşturulan Gruplar:</p>
          <div className="mt-4">
            {groups.map((group, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">Grup {index + 1}:</p>
                <ul className="list-disc ml-5">
                  {group.map((participant, idx) => (
                    <li key={idx} className="text-sm">{participant}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomGroupCreator;
