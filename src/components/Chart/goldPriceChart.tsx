import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js modülleri
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GoldPriceChart() {
  const [goldData, setGoldData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
          headers: {
            'x-access-token': 'goldapi-hl0sm4y10rpl-io',
          },
        });

        const data = response.data;

        if (data && data.price) {
          setGoldData(data);
        } else {
          setError('API yanıtı beklenen formatta değil');
        }
      } catch (err) {
        setError('Veri alınırken bir hata oluştu!');
      } finally {
        setLoading(false);
      }
    };

    fetchGoldPrice();
    const intervalId = setInterval(fetchGoldPrice, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    labels: goldData ? [new Date().toLocaleTimeString()] : [],
    datasets: [
      {
        label: 'Altın Fiyatı (USD)',
        data: goldData ? [goldData.price] : [],
        borderColor: 'gold',
        backgroundColor: 'rgba(255, 223, 0, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Altın Fiyatı (USD) Grafiği</h1>
      
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
          <Line data={chartData} />

          <div className="text-center mt-4 text-xl text-gray-800">
            {goldData ? (
              <p>Güncel Altın Fiyatı (USD): {goldData.price}</p>
            ) : (
              <p>Güncel altın fiyatı verisi alınamadı.</p>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Altın Fiyatı Bilgileri</h2>
            {goldData && (
              <div className="space-y-2">
                <p><strong>Son Fiyat:</strong> {goldData.price} USD</p>
                <p><strong>Önceki Kapanış Fiyatı:</strong> {goldData.prev_close_price} USD</p>
                <p><strong>Açılış Fiyatı:</strong> {goldData.open_price} USD</p>
                <p><strong>En Düşük Fiyat:</strong> {goldData.low_price} USD</p>
                <p><strong>En Yüksek Fiyat:</strong> {goldData.high_price} USD</p>
                <p><strong>Fiyat Değişimi:</strong> {goldData.ch} USD</p>
                <p><strong>Yüzde Değişim:</strong> {goldData.chp} %</p>
                <p><strong>Teklif (Ask):</strong> {goldData.ask} USD</p>
                <p><strong>Teklif (Bid):</strong> {goldData.bid} USD</p>
                <p><strong>Gram Başına Fiyat (24K):</strong> {goldData.price_gram_24k} USD</p>
                <p><strong>Gram Başına Fiyat (22K):</strong> {goldData.price_gram_22k} USD</p>
                <p><strong>Gram Başına Fiyat (21K):</strong> {goldData.price_gram_21k} USD</p>
                <p><strong>Gram Başına Fiyat (20K):</strong> {goldData.price_gram_20k} USD</p>
                <p><strong>Gram Başına Fiyat (18K):</strong> {goldData.price_gram_18k} USD</p>
                <p><strong>Gram Başına Fiyat (16K):</strong> {goldData.price_gram_16k} USD</p>
                <p><strong>Gram Başına Fiyat (14K):</strong> {goldData.price_gram_14k} USD</p>
                <p><strong>Gram Başına Fiyat (10K):</strong> {goldData.price_gram_10k} USD</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default GoldPriceChart;
