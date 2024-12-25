import React, { useState } from 'react';

const DateManipulationCalculator: React.FC = () => {

  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [weeks, setWeeks] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [resultDate, setResultDate] = useState<string>('');

  const handleCalculation = () => {
    if (!selectedDate) return;

    const date = new Date(selectedDate);

    if (operation === 'add') {
      date.setFullYear(date.getFullYear() + years);
      date.setMonth(date.getMonth() + months);
      date.setDate(date.getDate() + days + weeks * 7);
    } else {
      date.setFullYear(date.getFullYear() - years);
      date.setMonth(date.getMonth() - months);
      date.setDate(date.getDate() - days - weeks * 7);
    }

    setResultDate(date.toLocaleDateString());
  };

  return (
    <div className="max-w-[500px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tarih Ekle/Çıkar Hesaplama</h2>

      <div className="mb-4">
        <label htmlFor="operation" className="block text-sm font-medium text-gray-700">İşlem Seçin</label>
        <select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value as 'add' | 'subtract')}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="add">Tarih Ekle</option>
          <option value="subtract">Tarih Çıkar</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Bir Tarih Seçin</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="years" className="block text-sm font-medium text-gray-700">Yıl</label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            min="0"
          />
        </div>
        <div>
          <label htmlFor="months" className="block text-sm font-medium text-gray-700">Ay</label>
          <input
            type="number"
            id="months"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            min="0"
          />
        </div>
        <div>
          <label htmlFor="weeks" className="block text-sm font-medium text-gray-700">Hafta</label>
          <input
            type="number"
            id="weeks"
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            min="0"
          />
        </div>
        <div>
          <label htmlFor="days" className="block text-sm font-medium text-gray-700">Gün</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            min="0"
          />
        </div>
      </div>

      <button
        onClick={handleCalculation}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {resultDate && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">Sonuç Tarih:</p>
          <p className="text-lg">{resultDate}</p>
        </div>
      )}
    </div>
  );
};

export default DateManipulationCalculator;
