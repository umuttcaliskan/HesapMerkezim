import React, { useState } from 'react';

const CreditCardMinAmount: React.FC = () => {
  const [borc, setBorc] = useState<number | string>('');
  const [limit, setLimit] = useState<number | string>('');
  const [asgariOdeme, setAsgariOdeme] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  // Asgari ödeme hesaplama fonksiyonu
  const hesaplaAsgariOdeme = () => {
    const borcValue = Number(borc);
    const limitValue = Number(limit);

    if (borcValue <= 0 || limitValue <= 0 || isNaN(borcValue) || isNaN(limitValue)) {
      setError('Lütfen geçerli bir değer girin.');
      setAsgariOdeme(null);
      return;
    }

    setError('');
    // Limite göre asgari ödeme oranı belirleme
    const oran = limitValue < 50000 ? 0.2 : 0.4;
    const asgari = borcValue * oran;

    setAsgariOdeme(asgari);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Kredi Kartı Asgari Ödeme Hesaplama</h2>

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label htmlFor="borc" className="block text-sm font-medium text-gray-700">
            Borç Miktarı (₺)
          </label>
          <input
            type="number"
            id="borc"
            value={borc}
            onChange={(e) => setBorc(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="Borcunuzu Girin"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="limit" className="block text-sm font-medium text-gray-700">
            Kredi Kartı Limiti (₺)
          </label>
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="Limitinizi Girin"
            min="1"
          />
        </div>

        <div>
          <button
            onClick={hesaplaAsgariOdeme}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Hesapla
          </button>
        </div>
      </form>

      {asgariOdeme !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Asgari Ödeme Tutarı</h3>
          <ul className="space-y-2">
            <li><strong>Borç Miktarı:</strong> {borc} ₺</li>
            <li><strong>Kredi Kartı Limiti:</strong> {limit} ₺</li>
            <li><strong>Asgari Ödeme Tutarı:</strong> {asgariOdeme.toFixed(2)} ₺</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreditCardMinAmount;
