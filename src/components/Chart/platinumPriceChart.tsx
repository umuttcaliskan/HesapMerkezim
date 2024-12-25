import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function PlatinumPriceChart() {
  const [platinumData, setPlatinumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatinumPrice = async () => {
      try {
        const response = await axios.get('https://www.goldapi.io/api/XPT/USD', {
          headers: {
            'x-access-token': 'goldapi-hl0sm4y10rpl-io',
          },
        });

        const data = response.data;

        if (data && data.price) {
          setPlatinumData(data);
        } else {
          setError('API yanıtı beklenen formatta değil');
        }
      } catch (err) {
        setError('Veri alınırken bir hata oluştu!');
      } finally {
        setLoading(false);
      }
    };

    fetchPlatinumPrice();
    const intervalId = setInterval(fetchPlatinumPrice, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    labels: platinumData ? [new Date().toLocaleTimeString()] : [], 
    datasets: [
      {
        label: 'Platin Fiyatı (USD)',
        data: platinumData ? [platinumData.price] : [], 
        borderColor: 'platinum',
        backgroundColor: 'rgba(229, 228, 226, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Platin Fiyatı (USD) Grafiği</h1>
      
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
            {platinumData ? (
              <p>Güncel Platin Fiyatı (USD): {platinumData.price}</p>
            ) : (
              <p>Güncel platin fiyatı verisi alınamadı.</p>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Platin Fiyatı Bilgileri</h2>
            {platinumData && (
              <div className="space-y-2">
                <p><strong>Son Fiyat:</strong> {platinumData.price} USD</p>
                <p><strong>Önceki Kapanış Fiyatı:</strong> {platinumData.prev_close_price} USD</p>
                <p><strong>Açılış Fiyatı:</strong> {platinumData.open_price} USD</p>
                <p><strong>En Düşük Fiyat:</strong> {platinumData.low_price} USD</p>
                <p><strong>En Yüksek Fiyat:</strong> {platinumData.high_price} USD</p>
                <p><strong>Fiyat Değişimi:</strong> {platinumData.ch} USD</p>
                <p><strong>Yüzde Değişim:</strong> {platinumData.chp} %</p>
                <p><strong>Teklif (Ask):</strong> {platinumData.ask} USD</p>
                <p><strong>Teklif (Bid):</strong> {platinumData.bid} USD</p>
                <p><strong>Gram Başına Fiyat (24K):</strong> {platinumData.price_gram_24k} USD</p>
                <p><strong>Gram Başına Fiyat (22K):</strong> {platinumData.price_gram_22k} USD</p>
                <p><strong>Gram Başına Fiyat (21K):</strong> {platinumData.price_gram_21k} USD</p>
                <p><strong>Gram Başına Fiyat (20K):</strong> {platinumData.price_gram_20k} USD</p>
                <p><strong>Gram Başına Fiyat (18K):</strong> {platinumData.price_gram_18k} USD</p>
                <p><strong>Gram Başına Fiyat (16K):</strong> {platinumData.price_gram_16k} USD</p>
                <p><strong>Gram Başına Fiyat (14K):</strong> {platinumData.price_gram_14k} USD</p>
                <p><strong>Gram Başına Fiyat (10K):</strong> {platinumData.price_gram_10k} USD</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PlatinumPriceChart;
