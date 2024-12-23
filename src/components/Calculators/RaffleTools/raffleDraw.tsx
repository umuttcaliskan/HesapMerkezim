import React, { useState } from 'react';

const drawWinners = (participants: string[], numberOfWinners: number): string[] => {
  if (numberOfWinners <= 0 || numberOfWinners > participants.length) {
    alert('Geçersiz kazanan sayısı');
    return [];
  }
  const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5); // Katılımcıları karıştır
  return shuffledParticipants.slice(0, numberOfWinners); // Kazananları seç
};

const RaffleDraw: React.FC = () => {
  const [participants, setParticipants] = useState<string>('');  // Katılımcı listesi
  const [numberOfWinners, setNumberOfWinners] = useState<number>(1);
  const [winners, setWinners] = useState<string[]>([]);

  const handleDraw = () => {
    const participantArray = participants.split(',').map((name) => name.trim()).filter((name) => name);
    const drawnWinners = drawWinners(participantArray, numberOfWinners);
    setWinners(drawnWinners);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Çekiliş Yap</h2>

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
        <label htmlFor="numberOfWinners" className="block text-sm font-medium text-gray-700">Kazanan Sayısını Girin</label>
        <input
          type="number"
          id="numberOfWinners"
          value={numberOfWinners}
          onChange={(e) => setNumberOfWinners(Number(e.target.value))}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          min="1"
          max={participants.split(',').length}
        />
      </div>

      <button
        onClick={handleDraw}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Çekiliş Yap
      </button>
      
      {winners.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Kazananlar:</p>
          <ul className="mt-4 text-lg">
            {winners.map((winner, index) => (
              <li key={index} className="text-xl font-semibold">{index + 1}) {winner}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RaffleDraw;
