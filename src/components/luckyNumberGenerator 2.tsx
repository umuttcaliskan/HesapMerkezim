import React, { useState } from 'react';

const LuckyNumberGenerator: React.FC = () => {
  const [luckyNumber, setLuckyNumber] = useState<number | null>(null);
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);

  // Şanslı sayıyı hesaplayan fonksiyon
  const generateLuckyNumber = () => {
    if (min >= max) {
      alert('Lütfen geçerli bir aralık girin.');
      return;
    }
    // min ile max arasında rastgele bir sayı seç
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setLuckyNumber(randomNumber);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Şanslı Sayı Seçici</h2>

      <div className="space-y-4">
        {/* Minumum değer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Değer</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Maksimum değer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Maksimum Değer</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Şanslı Sayı Seçme Butonu */}
        <button
          onClick={generateLuckyNumber}
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Şanslı Sayıyı Bul!
        </button>

        {/* Sonuç kısmı */}
        {luckyNumber !== null && (
          <div className="mt-6 text-center p-4 bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-xl font-semibold">Şanslı Sayınız:</p>
            <p className="text-2xl font-bold text-blue-500">{luckyNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LuckyNumberGenerator;
