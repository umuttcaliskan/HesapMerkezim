import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js modüllerini kaydediyoruz
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function PalladiumPriceChart() {
  const [palladiumData, setPalladiumData] = useState(null);  // Tüm API verisini burada tutuyoruz
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API'den veri çekme
  useEffect(() => {
    const fetchPalladiumPrice = async () => {
      try {
        const response = await axios.get('https://www.goldapi.io/api/XPD/USD', {
          headers: {
            'x-access-token': 'goldapi-hl0sm4y10rpl-io',  // Gold API anahtarınızı buraya girin
          },
        });

        const data = response.data;

        // Yanıtı kontrol ediyoruz
        if (data && data.price) {
          setPalladiumData(data);  // Veriyi tümüyle palladiumData state'ine atıyoruz
        } else {
          setError('API yanıtı beklenen formatta değil');
        }
      } catch (err) {
        setError('Veri alınırken bir hata oluştu!');
      } finally {
        setLoading(false);
      }
    };

    fetchPalladiumPrice();
    const intervalId = setInterval(fetchPalladiumPrice, 60000); // Her 1 dakikada bir fiyatı güncelle

    return () => clearInterval(intervalId); // Temizleme
  }, []);

  // Veriyi grafik için hazırlama
  const chartData = {
    labels: palladiumData ? [new Date().toLocaleTimeString()] : [], // Yalnızca bir etiket var, ilk veri alındığında
    datasets: [
      {
        label: 'Paladyum Fiyatı (USD)',
        data: palladiumData ? [palladiumData.price] : [],  // Fiyatı grafik için ekliyoruz
        borderColor: 'silver',
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Paladyum Fiyatı (USD) Grafiği</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <span className="text-xl text-gray-600">Yükleniyor...</span>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-48">
          <span className="text-xl text-red-500">{error}</span>
        </div>
      ) : (
        <>
          {/* Grafik */}
          <Line data={chartData} />

          {/* Güncel fiyat */}
          <div className="text-center mt-4 text-xl text-gray-800">
            {palladiumData ? (
              <p>Güncel Paladyum Fiyatı (USD): {palladiumData.price}</p>
            ) : (
              <p>Güncel paladyum fiyatı verisi alınamadı.</p>
            )}
          </div>

          {/* Tüm diğer bilgileri kullanıcıya aktarma */}
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Paladyum Fiyatı Bilgileri</h2>
            {palladiumData && (
              <div className="space-y-2">
                <p><strong>Son Fiyat:</strong> {palladiumData.price} USD</p>
                <p><strong>Önceki Kapanış Fiyatı:</strong> {palladiumData.prev_close_price} USD</p>
                <p><strong>Açılış Fiyatı:</strong> {palladiumData.open_price} USD</p>
                <p><strong>En Düşük Fiyat:</strong> {palladiumData.low_price} USD</p>
                <p><strong>En Yüksek Fiyat:</strong> {palladiumData.high_price} USD</p>
                <p><strong>Fiyat Değişimi:</strong> {palladiumData.ch} USD</p>
                <p><strong>Yüzde Değişim:</strong> {palladiumData.chp} %</p>
                <p><strong>Teklif (Ask):</strong> {palladiumData.ask} USD</p>
                <p><strong>Teklif (Bid):</strong> {palladiumData.bid} USD</p>
                <p><strong>Gram Başına Fiyat (24K):</strong> {palladiumData.price_gram_24k} USD</p>
                <p><strong>Gram Başına Fiyat (22K):</strong> {palladiumData.price_gram_22k} USD</p>
                <p><strong>Gram Başına Fiyat (21K):</strong> {palladiumData.price_gram_21k} USD</p>
                <p><strong>Gram Başına Fiyat (20K):</strong> {palladiumData.price_gram_20k} USD</p>
                <p><strong>Gram Başına Fiyat (18K):</strong> {palladiumData.price_gram_18k} USD</p>
                <p><strong>Gram Başına Fiyat (16K):</strong> {palladiumData.price_gram_16k} USD</p>
                <p><strong>Gram Başına Fiyat (14K):</strong> {palladiumData.price_gram_14k} USD</p>
                <p><strong>Gram Başına Fiyat (10K):</strong> {palladiumData.price_gram_10k} USD</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PalladiumPriceChart;
