import React, { useState } from 'react';

const LgsExamScore: React.FC = () => {
  const [turkceDogru, setTurkceDogru] = useState<number>(0);
  const [matematikDogru, setMatematikDogru] = useState<number>(0);
  const [fenDogru, setFenDogru] = useState<number>(0);
  const [tcinkTarDogru, setTcinkTarDogru] = useState<number>(0);
  const [dinKultureDogru, setDinKultureDogru] = useState<number>(0);
  const [yabanciDilDogru, setYabanciDilDogru] = useState<number>(0);

  const [turkceYanlis, setTurkceYanlis] = useState<number>(0);
  const [matematikYanlis, setMatematikYanlis] = useState<number>(0);
  const [fenYanlis, setFenYanlis] = useState<number>(0);
  const [tcinkTarYanlis, setTcinkTarYanlis] = useState<number>(0);
  const [dinKultureYanlis, setDinKultureYanlis] = useState<number>(0);
  const [yabanciDilYanlis, setYabanciDilYanlis] = useState<number>(0);

  const [puan, setPuan] = useState<number | null>(null);
  const [netler, setNetler] = useState<{
    turkceNet: number;
    matematikNet: number;
    fenNet: number;
    tcinkTarNet: number;
    dinKultureNet: number;
    yabanciDilNet: number;
    toplamNet: number;
  }>({
    turkceNet: 0,
    matematikNet: 0,
    fenNet: 0,
    tcinkTarNet: 0,
    dinKultureNet: 0,
    yabanciDilNet: 0,
    toplamNet: 0,
  });

  // Net hesaplama fonksiyonu
  const hesaplaNet = (dogru: number, yanlis: number) => {
    const net = dogru - Math.floor(yanlis / 3);
    return net < 0 ? 0 : net; // Net negatif olamaz
  };

  // Puan hesaplama fonksiyonu
  const hesaplaPuan = () => {
    const turkceNet = hesaplaNet(turkceDogru, turkceYanlis);
    const matematikNet = hesaplaNet(matematikDogru, matematikYanlis);
    const fenNet = hesaplaNet(fenDogru, fenYanlis);
    const tcinkTarNet = hesaplaNet(tcinkTarDogru, tcinkTarYanlis);
    const dinKultureNet = hesaplaNet(dinKultureDogru, dinKultureYanlis);
    const yabanciDilNet = hesaplaNet(yabanciDilDogru, yabanciDilYanlis);

    const toplamNet =
      turkceNet + matematikNet + fenNet + tcinkTarNet + dinKultureNet + yabanciDilNet;

    // Netleri ve toplam neti güncelle
    setNetler({
      turkceNet,
      matematikNet,
      fenNet,
      tcinkTarNet,
      dinKultureNet,
      yabanciDilNet,
      toplamNet,
    });

    const puan =
      turkceNet * 4.348 +
      tcinkTarNet * 1.666 +
      dinKultureNet * 1.899 +
      yabanciDilNet * 1.5075 +
      matematikNet * 4.2538 +
      fenNet * 4.1230 +
      194.78;

    setPuan(puan);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">LGS Puan Hesaplayıcı</h2>

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
              max="20"
              min="0"
            />
            <input
              type="number"
              id="turkceYanlis"
              value={turkceYanlis}
              onChange={(e) => setTurkceYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="20"
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
              max="20"
              min="0"
            />
            <input
              type="number"
              id="matematikYanlis"
              value={matematikYanlis}
              onChange={(e) => setMatematikYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="20"
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

        {/* T.C. İnk. Tar. ve Atatürk */}
        <div>
          <label htmlFor="tcinkTar" className="block text-sm font-medium text-gray-700">
            T.C. İnk. Tarihi ve Atatürk (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="tcinkTarDogru"
              value={tcinkTarDogru}
              onChange={(e) => setTcinkTarDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="10"
              min="0"
            />
            <input
              type="number"
              id="tcinkTarYanlis"
              value={tcinkTarYanlis}
              onChange={(e) => setTcinkTarYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="10"
              min="0"
            />
          </div>
        </div>

        {/* Din Kültürü ve Ahlak Bilgisi */}
        <div>
          <label htmlFor="dinKulture" className="block text-sm font-medium text-gray-700">
            Din Kültürü ve Ahlak Bilgisi (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="dinKultureDogru"
              value={dinKultureDogru}
              onChange={(e) => setDinKultureDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="10"
              min="0"
            />
            <input
              type="number"
              id="dinKultureYanlis"
              value={dinKultureYanlis}
              onChange={(e) => setDinKultureYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="10"
              min="0"
            />
          </div>
        </div>

        {/* Yabancı Dil */}
        <div>
          <label htmlFor="yabanciDil" className="block text-sm font-medium text-gray-700">
            Yabancı Dil (Doğru / Yanlış)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="yabanciDilDogru"
              value={yabanciDilDogru}
              onChange={(e) => setYabanciDilDogru(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Doğru"
              max="10"
              min="0"
            />
            <input
              type="number"
              id="yabanciDilYanlis"
              value={yabanciDilYanlis}
              onChange={(e) => setYabanciDilYanlis(Number(e.target.value))}
              className="w-1/2 p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Yanlış"
              max="10"
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
          <h3 className="text-xl font-semibold">LGS Puanı</h3>
          <p className="text-lg">Hesaplanan LGS Puanınız: {puan.toFixed(2)}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-1">Ders Netleri</h4>
            <ul className="space-y-2">
              <li><strong>Türkçe Net:</strong> {netler.turkceNet}</li>
              <li><strong>Matematik Net:</strong> {netler.matematikNet}</li>
              <li><strong>Fen Bilgisi Net:</strong> {netler.fenNet}</li>
              <li><strong>T.C. İnk. Tarihi Net:</strong> {netler.tcinkTarNet}</li>
              <li><strong>Din Kültürü Net:</strong> {netler.dinKultureNet}</li>
              <li><strong>Yabancı Dil Net:</strong> {netler.yabanciDilNet}</li>
              <li><strong>Toplam Net:</strong> {netler.toplamNet} / 90</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LgsExamScore;
