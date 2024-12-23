import React, { useState } from 'react';

interface IdealWeightResult {
  bmi: number;
  idealWeight: number;
  weightStatus: string;
  weightDifference: number;
}

const IdealWeightCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<IdealWeightResult | null>(null);

  const handlePositiveInput = (value: number): number => {
    return value < 0 ? 0 : value;
  };

  const calculateIdealWeight = () => {
    if (height === 0 || weight === 0) {
      alert('Lütfen boy ve kilo değerlerinizi giriniz.');
      return;
    }

    // BMI Hesaplama = kilo / (boy in meters)²
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Hamwi Formülü ile ideal kilo hesaplama
    let baseWeight = 48; // Kadınlar için baz kilo
    if (gender === 'male') {
      baseWeight = 52; // Erkekler için baz kilo
    }
    
    // 152.4 cm (5 feet) üzerindeki her 2.54 cm (1 inch) için
    const heightDiff = height - 152.4;
    const additionalWeight = (heightDiff / 2.54) * (gender === 'male' ? 1.9 : 1.7);
    const idealWeight = Math.round(baseWeight + additionalWeight);

    // Kilo durumu belirleme
    let weightStatus = '';
    if (bmi < 18.5) weightStatus = 'Zayıf';
    else if (bmi < 24.9) weightStatus = 'Normal';
    else if (bmi < 29.9) weightStatus = 'Kilolu';
    else weightStatus = 'Obez';

    // İdeal kilodan fark
    const weightDifference = weight - idealWeight;

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      idealWeight,
      weightStatus,
      weightDifference
    });
  };

  return (
    <div className="max-w-[400px] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">İdeal Kilo Hesaplayıcı</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cinsiyet</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                className="mr-2"
              />
              Erkek
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className="mr-2"
              />
              Kadın
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Boy (cm)</label>
          <input
            type="number"
            value={height || ''}
            onChange={(e) => setHeight(handlePositiveInput(Number(e.target.value)))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Örn: 170"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kilo (kg)</label>
          <input
            type="number"
            value={weight || ''}
            onChange={(e) => setWeight(handlePositiveInput(Number(e.target.value)))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Örn: 70"
          />
        </div>

        <button
          onClick={calculateIdealWeight}
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Hesapla
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="font-semibold text-lg">Sonuçlar</h3>
            <p><strong>Vücut Kitle İndeksi (BMI):</strong> {result.bmi}</p>
            <p><strong>Kilo Durumu:</strong> {result.weightStatus}</p>
            <p><strong>İdeal Kilonuz:</strong> {result.idealWeight} kg</p>
            <p>
              {result.weightDifference > 0
                ? `İdeal kilonuzun ${Math.abs(result.weightDifference).toFixed(1)} kg üzerindesiniz`
                : result.weightDifference < 0
                ? `İdeal kilonuzun ${Math.abs(result.weightDifference).toFixed(1)} kg altındasınız`
                : 'İdeal kilodasınız!'}
            </p>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-500">
          <p>Not: Bu hesaplamalar genel bir referans içindir ve kişiden kişiye değişiklik gösterebilir. 
             Kesin sonuçlar için lütfen bir sağlık uzmanına danışınız.</p>
        </div>
      </div>
    </div>
  );
};

export default IdealWeightCalculator;
