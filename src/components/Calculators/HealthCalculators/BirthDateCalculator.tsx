import React, { useState } from 'react';

// Yaş bilgisi için bir tip tanımlıyoruz
interface AgeInfo {
  years: number;
  months: number;
  days: number;
}

interface CountdownInfo {
  years: number;
  months: number;
  days: number;
}

const BirthDateCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');  // Doğum tarihi, string türünde
  const [ageInfo, setAgeInfo] = useState<AgeInfo | null>(null);  // Yaş bilgisi, AgeInfo tipinde veya null
  const [countdownInfo, setCountdownInfo] = useState<CountdownInfo | null>(null);  // Doğuma kalan süre

  // Yaş hesaplama fonksiyonu
  const calculateAge = () => {
    if (!birthDate) return;  // Eğer doğum tarihi girilmemişse, hiçbir şey yapma

    const today = new Date();
    const birth = new Date(birthDate);

    // Eğer doğum tarihi geçmişse, yaşı hesapla
    if (birth <= today) {
      const ageInMilliseconds = today.getTime() - birth.getTime(); // Doğum tarihi ile bugünün farkı (milisaniye cinsinden)
      const ageDate = new Date(ageInMilliseconds);
      
      const years = ageDate.getUTCFullYear() - 1970;
      const months = today.getMonth() - birth.getMonth();
      const days = today.getDate() - birth.getDate();

      setAgeInfo({
        years,
        months: months >= 0 ? months : 12 + months,  // Eğer ay negatifse, bir yıl ekleyip ayı düzelt
        days: days >= 0 ? days : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days,  // Gün negatifse, ayın son gününe göre düzelt
      });
      setCountdownInfo(null);  // Eğer doğum tarihi geçmişse geri sayım bilgisi sıfırlanır
    } else {
      // Eğer doğum tarihi gelecekteyse, doğuma kalan süreyi hesapla
      const countdownInMilliseconds = birth.getTime() - today.getTime();
      const countdownDate = new Date(countdownInMilliseconds);

      const years = countdownDate.getUTCFullYear() - 1970;
      const months = today.getMonth() - birth.getMonth();
      const days = today.getDate() - birth.getDate();

      setCountdownInfo({
        years,
        months: months >= 0 ? months : 12 + months,  // Eğer ay negatifse, bir yıl ekleyip ayı düzelt
        days: days >= 0 ? days : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days,  // Gün negatifse, ayın son gününe göre düzelt
      });
      setAgeInfo(null);  // Eğer doğum tarihi gelecekteyse, yaş bilgisi sıfırlanır
    }
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Doğum Tarihi Hesaplama</h2>
      
      <div className="mb-4">
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Doğum Tarihini Girin</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      
      <button
        onClick={calculateAge}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {ageInfo && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Bugünün Tarihi: {new Date().toLocaleDateString()}</p>
          <p className="text-xl font-semibold mt-4">Yaşınız:</p>
          <p className="text-lg">{ageInfo.years} yıl, {ageInfo.months} ay, {ageInfo.days} gün</p>
        </div>
      )}

      {countdownInfo && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Bugünün Tarihi: {new Date().toLocaleDateString()}</p>
          <p className="text-xl font-semibold mt-4">Doğuma Kalan:</p>
          <p className="text-lg">{countdownInfo.years} yıl, {countdownInfo.months} ay, {countdownInfo.days} gün</p>
        </div>
      )}
    </div>
  );
};

export default BirthDateCalculator;
