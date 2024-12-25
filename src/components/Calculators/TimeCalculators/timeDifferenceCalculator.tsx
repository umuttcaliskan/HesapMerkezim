import React, { useState } from 'react';

const TimeDifferenceCalculator: React.FC = () => {

  const locations = [
    'New York', 'Istanbul', 'Tokyo', 'Sydney', 'London', 'Shanghai', 'Johannesburg',
    'Los Angeles', 'Paris', 'Dubai', 'Chicago', 'Berlin', 'Kolkata', 'Mexico City', 
    'Denver', 'Madrid', 'Rome', 'Moscow', 'Buenos Aires', 'Cairo'
  ];

  const [city1, setCity1] = useState<string>('New York');
  const [city2, setCity2] = useState<string>('Istanbul');
  const [timeDifference, setTimeDifference] = useState<number | null>(null);
  const [time1, setTime1] = useState<string | null>(null);
  const [time2, setTime2] = useState<string | null>(null);

  const calculateTimeDifference = () => {
    const now = new Date();

    const timeZones: { [key: string]: string } = {
      'New York': 'America/New_York',
      'Istanbul': 'Europe/Istanbul',
      'Tokyo': 'Asia/Tokyo',
      'Sydney': 'Australia/Sydney',
      'London': 'Europe/London',
      'Shanghai': 'Asia/Shanghai',
      'Johannesburg': 'Africa/Johannesburg',
      'Los Angeles': 'America/Los_Angeles',
      'Paris': 'Europe/Paris',
      'Dubai': 'Asia/Dubai',
      'Chicago': 'America/Chicago',
      'Berlin': 'Europe/Berlin',
      'Kolkata': 'Asia/Kolkata',
      'Mexico City': 'America/Mexico_City',
      'Denver': 'America/Denver',
      'Madrid': 'Europe/Madrid',
      'Rome': 'Europe/Rome',
      'Moscow': 'Europe/Moscow',
      'Buenos Aires': 'America/Argentina/Buenos_Aires',
      'Cairo': 'Africa/Cairo',
    };

    const zone1 = timeZones[city1];
    const zone2 = timeZones[city2];

    const timeInCity1 = new Date(now.toLocaleString('en-US', { timeZone: zone1 }));
    const timeInCity2 = new Date(now.toLocaleString('en-US', { timeZone: zone2 }));

    const timeDifferenceInMs = timeInCity2.getTime() - timeInCity1.getTime();
    
    const differenceInHours = timeDifferenceInMs / (1000 * 3600);
    
    const formattedTime1 = timeInCity1.toLocaleTimeString([], { timeStyle: 'short' });
    const formattedTime2 = timeInCity2.toLocaleTimeString([], { timeStyle: 'short' });

    setTimeDifference(differenceInHours);
    setTime1(formattedTime1);
    setTime2(formattedTime2);
  };

  return (
    <div className="max-w-[500px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Saat Farkı Hesaplama</h2>

      {/* Şehir 1 seçimi */}
      <div className="mb-4">
        <label htmlFor="city1" className="block text-sm font-medium text-gray-700">Şehir 1 Seçin</label>
        <select
          id="city1"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        >
          {locations.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Şehir 2 seçimi */}
      <div className="mb-4">
        <label htmlFor="city2" className="block text-sm font-medium text-gray-700">Şehir 2 Seçin</label>
        <select
          id="city2"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        >
          {locations.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <button
        onClick={calculateTimeDifference}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {timeDifference !== null && time1 && time2 && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Bugünün Tarihi ve Saati: {new Date().toLocaleString()}</p>

          <div className="mt-4">
            <p className="text-lg font-semibold">{city1} Saati: {time1}</p>
            <p className="text-lg font-semibold">{city2} Saati: {time2}</p>
          </div>

          <p className="text-xl font-semibold mt-4">Saat Farkı:</p>
          <p className="text-lg">
            {Math.abs(timeDifference).toFixed(2)} saat
          </p>
          <p className="text-sm text-gray-600">
            {timeDifference > 0
              ? `${city2} daha ileride`
              : timeDifference < 0
              ? `${city1} daha ileride`
              : 'İki şehir aynı saatte'}
          </p>
        </div>
      )}

      {timeDifference === null && (
        <div className="mt-6 text-center text-red-600">
          <p className="text-lg font-semibold">Bir şehir seçmediniz!</p>
        </div>
      )}
    </div>
  );
};

export default TimeDifferenceCalculator;
