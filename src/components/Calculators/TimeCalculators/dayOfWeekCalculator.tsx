import React, { useState } from 'react';

const DayOfWeekCalculator: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [dayOfWeek, setDayOfWeek] = useState<string | null>(null);

  const calculateDayOfWeek = () => {
    if (!selectedDate) return;

    const date = new Date(selectedDate);
    const daysOfWeek = [
      'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'
    ];

    const dayIndex = date.getDay();
    setDayOfWeek(daysOfWeek[dayIndex]);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Haftanın Gününü Hesaplama</h2>

      <div className="mb-4">
        <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-700">Tarih Seçin</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={calculateDayOfWeek}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {dayOfWeek && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Bugünün Tarihi: {new Date().toLocaleDateString()}</p>
          <p className="text-xl font-semibold mt-4">Seçilen Tarihin Haftadaki Günü:</p>
          <p className="text-lg">{dayOfWeek}</p>
        </div>
      )}

      {selectedDate && !dayOfWeek && (
        <div className="mt-6 text-center text-red-600">
          <p className="text-lg font-semibold">Bir tarih seçmediniz!</p>
        </div>
      )}
    </div>
  );
};

export default DayOfWeekCalculator;
