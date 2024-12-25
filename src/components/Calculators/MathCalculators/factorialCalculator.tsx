import React, { useState } from 'react';

const calculateFactorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

const FactorialCalculator: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [factorialResult, setFactorialResult] = useState<number | null>(null); 

  const handleCalculate = () => {
    const num = Number(number);
    if (!num || num < 0 || num > 170) {
      setFactorialResult(null);
      alert("Lütfen geçerli bir pozitif sayı girin (0 ile 170 arasında).");
      return;
    }
    setFactorialResult(calculateFactorial(num));
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Faktöriyel Hesaplama</h2>

      <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Bir Sayı Girin</label>
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

      {factorialResult !== null && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Faktöriyel Sonucu:</p>
          <p className="text-xl font-semibold mt-4">{factorialResult}</p>
        </div>
      )}
    </div>
  );
};

export default FactorialCalculator;
