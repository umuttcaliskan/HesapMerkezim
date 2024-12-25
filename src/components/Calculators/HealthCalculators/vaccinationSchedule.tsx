import React, { useState } from 'react';


const vaccinationSchedule = [
  { months: 0, vaccine: "Hepatit-B 1. Aşı", dateOffset: 0 },
  { months: 1, vaccine: "Hepatit-B 2. Aşı", dateOffset: 1 },
  { months: 2, vaccine: "BCG 1. Aşı, DaBT - İPA - Hib 1. Aşı, KPA 1. Aşı", dateOffset: 2 },
  { months: 4, vaccine: "DaBT - İPA - Hib 2. Aşı, KPA 2. Aşı", dateOffset: 4 },
  { months: 6, vaccine: "Hepatit-B 3. Aşı, DaBT - İPA - Hib 3. Aşı, OPA 1. Aşı", dateOffset: 6 },
  { months: 12, vaccine: "KPA Pekiştirme Aşısı, KKK 1. Aşı, Su Çiçeği Aşısı", dateOffset: 12 },
  { months: 18, vaccine: "DaBT - İPA - Hib Pekiştirme Aşısı, OPA 2. Aşı, Hepatit-A 1. Aşı", dateOffset: 18 },
  { months: 24, vaccine: "Hepatit-A 2. Aşı", dateOffset: 24 },
  { months: 48, vaccine: "KKK Pekiştirme Aşısı, DaBt - İPA Pekiştirme Aşısı", dateOffset: 48 },
  { months: 156, vaccine: "Td Pekiştirme Aşısı", dateOffset: 156 },
];


const vaccineAbbreviations = {
  BCG: "Bacille - Calmette - Guerin (Tüberküloz - Verem) Aşısı",
  "DaBT - İPA - Hib": "Difteri, Boğmaca, Tetanos, İnaktif Polio, Hemofilus Influenza Tip B Aşısı (Beşli Karma Aşı)",
  KPA: "Kanjuge Pnömokok Aşısı",
  OPA: "Oral Polio Aşısı (Çocuk Felci) Aşısı",
  KKK: "Kızamık, Kızamıkçık, Kabakulak Aşısı",
  "DaBT - İPA": "Difteri, Boğmaca, Tetanos, İnaktif Polio Tip B Aşısı (Dörtlü Karma Aşı)",
  Td: "Erişkin Tipi Difteri - Tetanos Aşısı"
};

const VaccinationSchedule = () => {
  const [birthDate, setBirthDate] = useState('');
  const [vaccinationDates, setVaccinationDates] = useState([]);

  const calculateVaccinationDates = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    const schedules = vaccinationSchedule.map((schedule) => {
      const vaccineDate = new Date(birth);
      vaccineDate.setMonth(birth.getMonth() + schedule.months);

      const isPastDue = vaccineDate <= today;

      return {
        vaccine: schedule.vaccine,
        scheduledDate: vaccineDate,
        isPastDue,
        dueDate: vaccineDate.toLocaleDateString(),
      };
    });

    setVaccinationDates(schedules);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Aşı Takvimi Hesapla</h2>
      
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
        onClick={calculateVaccinationDates}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {vaccinationDates.length > 0 && (
        <div className="mt-6 space-y-4 text-left">
          <h3 className="text-xl font-semibold mb-4">Aşı Takviminiz:</h3>
          <ul className="space-y-2">
            {vaccinationDates.map((vaccination, index) => (
              <li key={index} className="flex items-center">
                <span className={vaccination.isPastDue ? "text-red-500" : "text-green-500"}>
                  {vaccination.dueDate}
                </span>
                <span className={vaccination.isPastDue ? "text-red-500 ml-4" : "text-green-500 ml-4"}>
                  {vaccination.vaccine}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Aşı Kısaltmalarının Anlamları:</h4>
            <ul className="space-y-2 mt-2">
              {Object.entries(vaccineAbbreviations).map(([abbreviation, meaning]) => (
                <li key={abbreviation} className="text-sm text-gray-700">
                  <strong>{abbreviation}</strong>: {meaning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaccinationSchedule;
