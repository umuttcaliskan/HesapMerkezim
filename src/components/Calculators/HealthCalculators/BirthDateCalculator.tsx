import React, { useState } from 'react';


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
  const [birthDate, setBirthDate] = useState<string>('');
  const [ageInfo, setAgeInfo] = useState<AgeInfo | null>(null);  
  const [countdownInfo, setCountdownInfo] = useState<CountdownInfo | null>(null); 


  const calculateAge = () => {
    if (!birthDate) return;  

    const today = new Date();
    const birth = new Date(birthDate);

    if (birth <= today) {
      const ageInMilliseconds = today.getTime() - birth.getTime();
      const ageDate = new Date(ageInMilliseconds);
      
      const years = ageDate.getUTCFullYear() - 1970;
      const months = today.getMonth() - birth.getMonth();
      const days = today.getDate() - birth.getDate();

      setAgeInfo({
        years,
        months: months >= 0 ? months : 12 + months, 
        days: days >= 0 ? days : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days, 
      });
      setCountdownInfo(null);
    } else {
      
      const countdownInMilliseconds = birth.getTime() - today.getTime();
      const countdownDate = new Date(countdownInMilliseconds);

      const years = countdownDate.getUTCFullYear() - 1970;
      const months = today.getMonth() - birth.getMonth();
      const days = today.getDate() - birth.getDate();

      setCountdownInfo({
        years,
        months: months >= 0 ? months : 12 + months, 
        days: days >= 0 ? days : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days,
      });
      setAgeInfo(null);
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
