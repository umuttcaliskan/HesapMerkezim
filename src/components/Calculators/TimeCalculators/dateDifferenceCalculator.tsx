import React, { useState } from 'react';

const DateDifferenceCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [difference, setDifference] = useState<number | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start <= end) {
      const timeDifference = end.getTime() - start.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)); 

      setDifference(daysDifference);
    } else {
      setDifference(null);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tarih Farkı Hesaplama</h2>
      
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Başlangıç Tarihini Girin</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Bitiş Tarihini Girin</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      
      <button
        onClick={calculateDifference}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {difference !== null && difference >= 0 && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Bugünün Tarihi: {new Date().toLocaleDateString()}</p>
          <p className="text-xl font-semibold mt-4">Tarih Farkı:</p>
          <p className="text-lg">{difference} gün</p>
        </div>
      )}

      {difference === null && startDate && endDate && startDate > endDate && (
        <div className="mt-6 text-center text-red-600">
          <p className="text-lg font-semibold">Başlangıç tarihi bitiş tarihinden önce olmalıdır!</p>
        </div>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;
