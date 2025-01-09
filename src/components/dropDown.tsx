import React, { useState } from 'react';
import Calculator from './calculatorTool';
import LuckyNumberGenerator from './luckyNumberGenerator';
import FactorialCalculator from './Calculators/MathCalculators/factorialCalculator';
import RootCalculator from './Calculators/MathCalculators/rootCalculator';
import PermutationCalculator from './Calculators/MathCalculators/permutationCalculator';
import AreaCalculator from './Calculators/MathCalculators/areaCalculator';
import CombinationCalculator from './Calculators/MathCalculators/combinationCalculator';
import PersonalLoanCalculation from './Calculators/LoanCalculators/personalLoanCalculation';
import CreditCardMinAmount from './Calculators/LoanCalculators/creditCardMinAmount';
import BirthDateCalculator from './Calculators/HealthCalculators/BirthDateCalculator';
import IdealWeightCalculator from './Calculators/HealthCalculators/idealWeightCalculator';
import VaccinationSchedule from './Calculators/HealthCalculators/vaccinationSchedule';
import DiceRoll from './Calculators/RaffleTools/diceRoll';
import CoinFlip from './Calculators/RaffleTools/coinFlip';
import WheelOfFortune from './Calculators/RaffleTools/wheelOfFortune';
import RaffleDraw from './Calculators/RaffleTools/raffleDraw';
import TimeDifferenceCalculator from './Calculators/TimeCalculators/timeDifferenceCalculator';
import DateDifferenceCalculator from './Calculators/TimeCalculators/dateDifferenceCalculator';
import DayOfWeekCalculator from './Calculators/TimeCalculators/dayOfWeekCalculator';
import DateManipulationCalculator from './Calculators/TimeCalculators/dateManipulationCalculator';

const DropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const categories = {
    math: {
      name: 'Matematik',
      tools: ['Hesap Makinesi', 'Faktöriyel', 'Kök', 'Permütasyon', 'Alan', 'Kombinasyon'],
      default: <Calculator />
    },
    loan: {
      name: 'Kredi/Borç',
      tools: ['İhtiyaç Kredisi Hesaplama', 'Kredi Kartı Asgari Ödeme'],
      default: <PersonalLoanCalculation />
    },
    health: {
      name: 'Sağlık',
      tools: ['Doğum Tarihi', 'İdeal Kilo', 'Aşı Takvimi'],
      default: <BirthDateCalculator />
    },
    raffle: {
      name: 'Çekiliş',
      tools: ['Zar At', 'Yazı Tura', 'Çarkıfelek', 'Çekiliş Yap'],
      default: <DiceRoll />
    },
    time: {
      name: 'Zaman',
      tools: ['Saat Farkı', 'Tarih Farkı', 'Hangi Gün', 'Tarih Hesaplama'],
      default: <TimeDifferenceCalculator />
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedCalculator(categories[category].default);
  };

  const handleCalculatorChange = (calculator: string) => {
    switch (calculator) {
      // Matematik Hesaplayıcıları
      case 'Hesap Makinesi':
        setSelectedCalculator(<Calculator />);
        break;
      case 'Faktöriyel':
        setSelectedCalculator(<FactorialCalculator />);
        break;
      case 'Kök':
        setSelectedCalculator(<RootCalculator />);
        break;
      case 'Permütasyon':
        setSelectedCalculator(<PermutationCalculator />);
        break;
      case 'Alan':
        setSelectedCalculator(<AreaCalculator />);
        break;
      case 'Kombinasyon':
        setSelectedCalculator(<CombinationCalculator />);
        break;

      // Kredi Hesaplayıcıları
      case 'İhtiyaç Kredisi Hesaplama':
        setSelectedCalculator(<PersonalLoanCalculation />);
        break;
      case 'Kredi Kartı Asgari Ödeme':
        setSelectedCalculator(<CreditCardMinAmount />);
        break;

      // Sağlık Hesaplayıcıları
      case 'Doğum Tarihi':
        setSelectedCalculator(<BirthDateCalculator />);
        break;
      case 'İdeal Kilo':
        setSelectedCalculator(<IdealWeightCalculator />);
        break;
      case 'Aşı Takvimi':
        setSelectedCalculator(<VaccinationSchedule />);
        break;

      // Çekiliş Araçları
      case 'Zar At':
        setSelectedCalculator(<DiceRoll />);
        break;
      case 'Yazı Tura':
        setSelectedCalculator(<CoinFlip />);
        break;
      case 'Çarkıfelek':
        setSelectedCalculator(<WheelOfFortune />);
        break;
      case 'Çekiliş Yap':
        setSelectedCalculator(<RaffleDraw />);
        break;

      // Zaman Hesaplayıcıları
      case 'Saat Farkı':
        setSelectedCalculator(<TimeDifferenceCalculator />);
        break;
      case 'Tarih Farkı':
        setSelectedCalculator(<DateDifferenceCalculator />);
        break;
      case 'Hangi Gün':
        setSelectedCalculator(<DayOfWeekCalculator />);
        break;
      case 'Tarih Hesaplama':
        setSelectedCalculator(<DateManipulationCalculator />);
        break;

      default:
        setSelectedCalculator(categories[selectedCategory].default);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">İstediğiniz Hesaplamayı Seçiniz</h2>
      <div className="flex flex-col space-y-4">
        {/* Kategori seçimi */}
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Kategori Seçiniz</option>
          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </select>

        {/* Hesaplayıcı seçimi */}
        {selectedCategory && (
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => handleCalculatorChange(e.target.value)}
          >
            <option value="">Hesaplama Seçiniz</option>
            {categories[selectedCategory].tools.map((tool) => (
              <option key={tool} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Seçilen hesaplayıcıyı göster */}
      <div className="mt-6">
        {selectedCalculator}
      </div>
    </div>
  );
};

export default DropDown; 