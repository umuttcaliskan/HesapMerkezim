import React, { useState } from 'react';

// Puan hesaplama için gerekli türler
interface Netler {
  turkceNet: number;
  matematikNet: number;
  fenNet: number;
  sosyalNet: number;
  toplamNet: number;
}

interface Puanlar {
  sayisal: number;
  esitAgirlik: number;
  sozel: number;
  genel: number;
}

const MsuExamScore: React.FC = () => {
  // Kullanıcı girdileri için state'ler
  const [turkceDogru, setTurkceDogru] = useState<number>(0);
  const [matematikDogru, setMatematikDogru] = useState<number>(0);
  const [fenDogru, setFenDogru] = useState<number>(0);
  const [sosyalDogru, setSosyalDogru] = useState<number>(0);

  const [turkceYanlis, setTurkceYanlis] = useState<number>(0);
  const [matematikYanlis, setMatematikYanlis] = useState<number>(0);
  const [fenYanlis, setFenYanlis] = useState<number>(0);
  const [sosyalYanlis, setSosyalYanlis] = useState<number>(0);

  const [puan, setPuan] = useState<Puanlar | null>(null);
  const [netler, setNetler] = useState<Netler>({
    turkceNet: 0,
    matematikNet: 0,
    fenNet: 0,
    sosyalNet: 0,
    toplamNet: 0,
  });

  // Net hesaplama fonksiyonu
  const hesaplaNet = (dogru: number, yanlis: number): number => {
    const net = dogru - (yanlis / 4); // 4 yanlış 1 doğruyu götürür
    return net < 0 ? 0 : net; // Net negatif olamaz
  };

  // Puan hesaplama fonksiyonu
  const hesaplaPuan = () => {
    const turkceNet = hesaplaNet(turkceDogru, turkceYanlis);
    const matematikNet = hesaplaNet(matematikDogru, matematikYanlis);
    const fenNet = hesaplaNet(fenDogru, fenYanlis);
    const sosyalNet = hesaplaNet(sosyalDogru, sosyalYanlis);

    const toplamNet =
      turkceNet + matematikNet + fenNet + sosyalNet;

    // Netleri ve toplam neti güncelle
    setNetler({
      turkceNet,
      matematikNet,
      fenNet,
      sosyalNet,
      toplamNet,
    });

    // Puan katsayıları (Sayısal, Sözel, Eşit Ağırlık, Genel)
    const sayisalPuan =
      turkceNet * 3.125 +
      matematikNet * 4.375 +
      fenNet * 7.5 +
      sosyalNet * 2.5;

    const esitAgirlikPuan =
      turkceNet * 4.375 +
      matematikNet * 4.375 +
      fenNet * 2.5 +
      sosyalNet * 5;

    const sozelPuan =
      turkceNet * 4.375 +
      matematikNet * 3.125 +
      fenNet * 2.5 +
      sosyalNet * 8.75;

    const genelPuan =
      turkceNet * 4.125 +
      matematikNet * 4.125 +
      fenNet * 4.25 +
      sosyalNet * 4.25;

    setPuan({
      sayisal: sayisalPuan,
      esitAgirlik: esitAgirlikPuan,
      sozel: sozelPuan,
      genel: genelPuan,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">MSÜ Puan Hesaplayıcı</h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Türkçe */}
        <div>
          <label htmlFor="turkce" className="block text-sm font-medium text-gray-700">
            Türkçe (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="turkceDogru"
              value={turkceDogru}
              onChange={(e) => setTurkceDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="40"
              min="0"
            />
            <input
              type="number"
              id="turkceYanlis"
              value={turkceYanlis}
              onChange={(e) => setTurkceYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="40"
              min="0"
            />
          </div>
        </div>

        {/* Matematik */}
        <div>
          <label htmlFor="matematik" className="block text-sm font-medium text-gray-700">
            Matematik (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="matematikDogru"
              value={matematikDogru}
              onChange={(e) => setMatematikDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="40"
              min="0"
            />
            <input
              type="number"
              id="matematikYanlis"
              value={matematikYanlis}
              onChange={(e) => setMatematikYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="40"
              min="0"
            />
          </div>
        </div>

        {/* Fen */}
        <div>
          <label htmlFor="fen" className="block text-sm font-medium text-gray-700">
            Fen Bilgisi (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="fenDogru"
              value={fenDogru}
              onChange={(e) => setFenDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="20"
              min="0"
            />
            <input
              type="number"
              id="fenYanlis"
              value={fenYanlis}
              onChange={(e) => setFenYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="20"
              min="0"
            />
          </div>
        </div>

        {/* Sosyal */}
        <div>
          <label htmlFor="sosyal" className="block text-sm font-medium text-gray-700">
            Sosyal Bilgiler (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="sosyalDogru"
              value={sosyalDogru}
              onChange={(e) => setSosyalDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="20"
              min="0"
            />
            <input
              type="number"
              id="sosyalYanlis"
              value={sosyalYanlis}
              onChange={(e) => setSosyalYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="20"
              min="0"
            />
          </div>
        </div>

        <div>
          <button
            onClick={hesaplaPuan}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Puanı Hesapla
          </button>
        </div>
      </form>

      {puan !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">MSÜ Puanı</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-1">Ders Netleri</h4>
            <ul className="space-y-2">
              <li><strong>Türkçe Net:</strong> {netler.turkceNet}</li>
              <li><strong>Matematik Net:</strong> {netler.matematikNet}</li>
              <li><strong>Fen Net:</strong> {netler.fenNet}</li>
              <li><strong>Sosyal Net:</strong> {netler.sosyalNet}</li>
              <li><strong>Toplam Net:</strong> {netler.toplamNet} / 120</li>
            </ul>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Puanlar</h4>
              <ul className="space-y-2">
                <li><strong>Sayısal Puanı:</strong> {puan.sayisal.toFixed(2)}</li>
                <li><strong>Eşit Ağırlık Puanı:</strong> {puan.esitAgirlik.toFixed(2)}</li>
                <li><strong>Sözel Puanı:</strong> {puan.sozel.toFixed(2)}</li>
                <li><strong>Genel Puanı:</strong> {puan.genel.toFixed(2)}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MsuExamScore;
