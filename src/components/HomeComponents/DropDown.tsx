import React, { useState } from 'react';
import PersonalLoanCalculation from '../Calculators/LoanCalculators/personalLoanCalculation';
import Calculator from '../calculatorTool';
import HighSchoolAverageCalculator from '../Calculators/SchoolCalculators/highSchoolAverageCalculator';
import CreditCardMinAmount from '../Calculators/LoanCalculators/creditCardMinAmount';
import LgsExamScore from '../Calculators/SchoolCalculators/LgsExamScore';
import StartingSchoolAge from '../Calculators/SchoolCalculators/startingSchoolAge';
import VaccinationSchedule from '../Calculators/HealthCalculators/vaccinationSchedule';
import BirthDateCalculator from '../Calculators/HealthCalculators/BirthDateCalculator';
import MsuExamScore from '../Calculators/SchoolCalculators/MsuExamScore';
import FactorialCalculator from '../Calculators/MathCalculators/factorialCalculator';
import RootCalculator from '../Calculators/MathCalculators/rootCalculator';
import RaffleDraw from '../Calculators/RaffleTools/raffleDraw';
import AreaCalculator from '../Calculators/MathCalculators/areaCalculator';
import CombinationCalculator from '../Calculators/MathCalculators/combinationCalculator';
import PermutationCalculator from '../Calculators/MathCalculators/permutationCalculator';
import GoldPriceChart from '../Chart/goldPriceChart';
import SilverPriceChart from '../Chart/silverPriceChart';
import PlatinumPriceChart from '../Chart/platinumPriceChart';
import PalladiumPriceChart from '../Chart/palladiumPriceChart';
import RandomGroupCreator from '../Calculators/RaffleTools/randomGroupCreator';
import CoinFlip from '../Calculators/RaffleTools/coinFlip';
import DiceRoll from '../Calculators/RaffleTools/diceRoll';
import IdealWeightCalculator from '../Calculators/HealthCalculators/idealWeightCalculator';
import WheelOfFortune from '../Calculators/RaffleTools/wheelOfFortune';
import DateDifferenceCalculator from '../Calculators/TimeCalculators/dateDifferenceCalculator';
import DayOfWeekCalculator from '../Calculators/TimeCalculators/dayOfWeekCalculator';
import TimeDifferenceCalculator from '../Calculators/TimeCalculators/timeDifferenceCalculator';
import DateManipulationCalculator from '../Calculators/TimeCalculators/dateManipulationCalculator';
const DropDown = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('Loan Calculator');

  const loanOptions = [
    'İhtiyaç Kredisi Hesaplama',
    'Kredi Kartı Asgari Ödeme Hesaplama'
  ];

  const schoolOptions = [
    'Lise Not Ortalaması Hesaplama',
    'LGS Puan Hesaplayıcı',
    'Okula Başlama Yaşı',
    'MSÜ Puan Hesaplayıcı'
  ];

  const healthOptions = [
    'Aşı Takvimi Hesaplama',
    'Doğum Tarihi Hesaplama',
    'İdeal Kilo Hesaplama',
  ];

  const mathCalculationOptions = [
    'Alan Hesaplama',
    'Faktöriyel Hesaplama',
    'Kombinasyon Hesaplama',
    'Köklü Sayı Hesaplama',
    'Permütasyon Hesaplama',
  ];

  const economyOptions = [
    'Altın Fiyat Grafiği',
    'Gümüş Fiyat Grafiği',
    'Platin Fiyat Grafiği',
    'Paladyum Fiyat Grafiği'
  ];

  const fastRaffleOptions = [
    'Çarkıfelek Oyunu', 
    'Çekiliş Yap',
    'Grup Kurası',
    'Yazı-Tura',
    'Zar At',
  ];

  const timeOptions = [
    'İki Tarih Arasındaki Gün Farkı Hesaplama',
    'Hangi Gün Hesaplama',
    'Saat Farkı Hesaplama',
    'Tarih Hesaplama'
  ];

  const renderComponent = () => {
    switch (selectedOption) {
      case 'İhtiyaç Kredisi Hesaplama':
        return <PersonalLoanCalculation />;
      case 'Lise Not Ortalaması Hesaplama':
        return <HighSchoolAverageCalculator />;
      case 'Hesap Makinesi':
        return <Calculator />;
      case 'Kredi Kartı Asgari Ödeme Hesaplama':
        return <CreditCardMinAmount />;
      case 'LGS Puan Hesaplayıcı':
        return <LgsExamScore />;
      case 'Okula Başlama Yaşı':
        return <StartingSchoolAge />;
      case 'Aşı Takvimi Hesaplama':
        return <VaccinationSchedule />;
      case 'Doğum Tarihi Hesaplama':
        return <BirthDateCalculator />;
      case 'MSÜ Puan Hesaplayıcı':
        return <MsuExamScore />;
      case 'Faktöriyel Hesaplama':
        return <FactorialCalculator />;
      case 'Köklü Sayı Hesaplama':
        return <RootCalculator />;
      case 'Çekiliş Yap':
        return <RaffleDraw />;
      case 'Alan Hesaplama':
        return <AreaCalculator />;
      case 'Kombinasyon Hesaplama':
        return <CombinationCalculator />;
      case 'Permütasyon Hesaplama':
        return <PermutationCalculator />;
      case 'Altın Fiyat Grafiği':
        return <GoldPriceChart />;
      case 'Gümüş Fiyat Grafiği':
        return <SilverPriceChart />;
      case 'Platin Fiyat Grafiği':
        return <PlatinumPriceChart />;
      case 'Paladyum Fiyat Grafiği':
        return <PalladiumPriceChart />;
      case 'Grup Kurası':
        return <RandomGroupCreator />;
      case 'Yazı-Tura':
        return <CoinFlip />;
      case 'Zar At':
        return <DiceRoll />;
      case 'İdeal Kilo Hesaplama':
        return <IdealWeightCalculator />;
      case 'Çarkıfelek Oyunu':
        return <WheelOfFortune />;
      case 'İki Tarih Arasındaki Gün Farkı Hesaplama':
        return <DateDifferenceCalculator />;
      case 'Hangi Gün Hesaplama':
        return <DayOfWeekCalculator />;
      case 'Saat Farkı Hesaplama':
        return <TimeDifferenceCalculator />;
      case 'Tarih Hesaplama':
        return <DateManipulationCalculator />;
      default:
        return <PersonalLoanCalculation />;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">İstediğiniz Hesaplamayı Seçiniz</h2>

      {/* İlk Dropdown - Kategori Seçimi */}
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setSelectedOption('');
        }}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      >
        <option value="">Kategori Seçiniz</option>
        <option value="School Calculations">Eğitim Hesaplamaları</option>
        <option value="Economy Calculations">Ekonomi Hesaplamaları</option>
        <option value="Fast Raffle">Hızlı Çekiliş</option>
        <option value="Loan Calculations">Kredi Hesaplamaları</option>
        <option value="Math Calculations">Matematik Hesaplamaları</option>
        <option value="Health Calculations">Sağlık Hesaplamaları</option>
        <option value="Time Calculations">Zaman Hesaplamaları</option>
      </select>

      {/* İkinci Dropdown - Seçenekler */}
      {selectedCategory === 'Loan Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {loanOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'School Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {schoolOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'Health Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {healthOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'Math Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {mathCalculationOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'Economy Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {economyOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'Fast Raffle' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {fastRaffleOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedCategory === 'Time Calculations' && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Hesaplama Seçiniz</option>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}

      <div className="mt-6">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DropDown;
