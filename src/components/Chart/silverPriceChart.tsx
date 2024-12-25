import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function SilverPriceChart() {
  const [silverData, setSilverData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSilverPrice = async () => {
      try {
        const response = await axios.get('https://www.goldapi.io/api/XAG/USD', {
          headers: {
            'x-access-token': 'goldapi-hl0sm4y10rpl-io',
          },
        });

        const data = response.data;

        if (data && data.price) {
          setSilverData(data);
        } else {
          setError('API yanıtı beklenen formatta değil');
        }
      } catch (err) {
        setError('Veri alınırken bir hata oluştu!');
      } finally {
        setLoading(false);
      }
    };

    fetchSilverPrice();
    const intervalId = setInterval(fetchSilverPrice, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    labels: silverData ? [new Date().toLocaleTimeString()] : [],
    datasets: [
      {
        label: 'Gümüş Fiyatı (USD)',
        data: silverData ? [silverData.price] : [],
        borderColor: 'silver',
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Gümüş Fiyatı (USD) Grafiği</h1>
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
            {silverData ? (
              <p>Güncel Gümüş Fiyatı (USD): {silverData.price}</p>
            ) : (
              <p>Güncel gümüş fiyatı verisi alınamadı.</p>
            )}
          </div>
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Gümüş Fiyatı Bilgileri</h2>
            {silverData && (
              <div className="space-y-2">
                <p><strong>Son Fiyat:</strong> {silverData.price} USD</p>
                <p><strong>Önceki Kapanış Fiyatı:</strong> {silverData.prev_close_price} USD</p>
                <p><strong>Açılış Fiyatı:</strong> {silverData.open_price} USD</p>
                <p><strong>En Düşük Fiyat:</strong> {silverData.low_price} USD</p>
                <p><strong>En Yüksek Fiyat:</strong> {silverData.high_price} USD</p>
                <p><strong>Fiyat Değişimi:</strong> {silverData.ch} USD</p>
                <p><strong>Yüzde Değişim:</strong> {silverData.chp} %</p>
                <p><strong>Teklif (Ask):</strong> {silverData.ask} USD</p>
                <p><strong>Teklif (Bid):</strong> {silverData.bid} USD</p>
                <p><strong>Gram Başına Fiyat (24K):</strong> {silverData.price_gram_24k} USD</p>
                <p><strong>Gram Başına Fiyat (22K):</strong> {silverData.price_gram_22k} USD</p>
                <p><strong>Gram Başına Fiyat (21K):</strong> {silverData.price_gram_21k} USD</p>
                <p><strong>Gram Başına Fiyat (20K):</strong> {silverData.price_gram_20k} USD</p>
                <p><strong>Gram Başına Fiyat (18K):</strong> {silverData.price_gram_18k} USD</p>
                <p><strong>Gram Başına Fiyat (16K):</strong> {silverData.price_gram_16k} USD</p>
                <p><strong>Gram Başına Fiyat (14K):</strong> {silverData.price_gram_14k} USD</p>
                <p><strong>Gram Başına Fiyat (10K):</strong> {silverData.price_gram_10k} USD</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default SilverPriceChart;
