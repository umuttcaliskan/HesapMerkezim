import React, { useState } from 'react';

const factorial = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Kombinasyon hesaplama fonksiyonu: C(n, r) = n! / (r! * (n-r)!)
const calculateCombination = (n: number, r: number): number => {
  if (r > n) return 0;  // r, n'den büyük olamaz
  return factorial(n) / (factorial(r) * factorial(n - r));
};

const CombinationCalculator: React.FC = () => {
  const [n, setN] = useState<number>(0);  // Toplam öğe sayısı
  const [r, setR] = useState<number>(0);  // Seçilen öğe sayısı
  const [combination, setCombination] = useState<number | null>(null); 

  const handlePositiveInput = (value: number): number => {
    return value < 0 ? 0 : value;
  };

  const handleCalculate = () => {
    const result = calculateCombination(n, r);
    setCombination(result);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Kombinasyon Hesaplayıcı</h2>

      <div className="mb-4">
        <label htmlFor="n" className="block text-sm font-medium text-gray-700">Eleman Sayısı (n)</label>
        <input
          type="number"
          id="n"
          value={n}
          onChange={(e) => setN(handlePositiveInput(Number(e.target.value)))}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="r" className="block text-sm font-medium text-gray-700">Seçim Sayısı (r)</label>
        <input
          type="number"
          id="r"
          value={r}
          onChange={(e) => setR(handlePositiveInput(Number(e.target.value)))}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {combination !== null && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold mt-4">Hesaplanan Kombinasyon (C(n, r)):</p>
          <p className="text-lg">{combination}</p>
        </div>
      )}
    </div>
  );
};

export default CombinationCalculator;
