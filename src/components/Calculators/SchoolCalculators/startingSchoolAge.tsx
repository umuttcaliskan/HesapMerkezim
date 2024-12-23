import React, { useState } from 'react';

const StartingSchoolAge = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageInfo, setAgeInfo] = useState(null);

  // Tarih hesaplama fonksiyonu
  const calculateStartSchoolEligibility = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    
    // Hesaplanan yaş (ay olarak)
    const ageInMonths = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
    const ageInYears = Math.floor(ageInMonths / 12);

    // Başlama durumları
    const canStartSchool = ageInMonths >= 69; // 69 ay ve üzeri ilkokula gidebilir
    const canStartSchoolWithParentalRequest = ageInMonths >= 66 && ageInMonths <= 68; // 66-68 ay arası veli izni ile
    const canAttendKindergarten = ageInMonths >= 57 && ageInMonths <= 68; // 57-68 ay arası ana sınıfına gidebilir

    // Yaş ve başlama durumlarını set etme
    setAgeInfo({
      todayDate: today.toLocaleDateString(), // Bugünün tarihi
      ageInYears,
      ageInMonths,
      canAttendKindergarten,
      canStartSchool,
      canStartSchoolWithParentalRequest
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Okula Başlama Durumu Hesapla</h2>
      
      <div className="mb-4">
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Çocuğun Doğum Tarihi</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      
      <button
        onClick={calculateStartSchoolEligibility}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {ageInfo !== null && (
        <div className="mt-6 space-y-4 text-center">
          <p className="text-lg font-semibold"> {ageInfo.todayDate} Tarihi İtibariyle Çocuğunuzun Yaşı: {ageInfo.ageInYears} yıl ({ageInfo.ageInMonths} ay)</p>

          {/* Ana Sınıfı Başlama Durumu */}
          {ageInfo.canAttendKindergarten ? (
            <p className="text-green-500">Ana Sınıfına Başlama Durumu: Ana sınıfına kayıt yaptırabilir.</p>
          ) : (
            <p className="text-red-500">Ana Sınıfına Başlama Durumu: Ana sınıfına kayıt yaptıramaz.</p>
          )}

          {/* İlkokul Başlama Durumu */}
          {ageInfo.canStartSchoolWithParentalRequest && (
            <p className="text-yellow-600 font-semibold">
            {ageInfo.ageInMonths} aylık olan çocuğun ilkokula kaydedilmesi zorunlu değildir. Ancak gelişim yönünden ilkokula hazır olduğu anlaşılan 66, 67 ve 68 aylık çocuklar velisinin yazılı isteği ile ilkokul birinci sınıfa kaydedilebilir.
            </p>
          )}

          {ageInfo.canStartSchool && !ageInfo.canStartSchoolWithParentalRequest && (
            <p className="text-green-500">
              İlkokula Başlama Durumu: İlkokula kayıt yaptırabilir.
            </p>
          )}

          {!ageInfo.canStartSchool && !ageInfo.canStartSchoolWithParentalRequest && (
            <p className="text-red-500">
              İlkokula Başlama Durumu: İlkokula kayıt yaptıramaz.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default StartingSchoolAge;
