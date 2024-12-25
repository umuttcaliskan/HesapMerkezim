import React, { useState } from 'react';

const calculateRoot = (x: number, n: number): number => {
  if (x < 0 && n % 2 === 0) {
    alert('Negatif sayılar için çift dereceden kök hesaplanamaz.');
    return NaN;
  }
  return Math.pow(x, 1 / n);
};

const RootCalculator: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [degree, setDegree] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const num = Number(number);
    const deg = Number(degree);
    
    if (!num || !deg || num < 0 || deg <= 0) {
      setResult(null); 
      alert('Lütfen geçerli bir sayı ve derece girin.');
      return;
    }
    
    const rootResult = calculateRoot(num, deg);
    setResult(rootResult);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Kök Hesaplama</h2>

      {/* Derece */}
      <div className="mb-4">
        <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Derece Girin (n)</label>
        <input
          type="number"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          min="1"
        />
      </div>

      {/* Sayı */}
      <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Bir Sayı Girin (x)</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          min="0"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {/* Sonuç */}
      {result !== null && !isNaN(result) && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Hesaplanan Kök:</p>
          <p className="text-xl font-semibold mt-4">{result}</p>
        </div>
      )}
    </div>
  );
};

export default RootCalculator;
