import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faClock, 
  faHeartPulse, 
  faDice, 
  faSquareRootVariable,
  faCreditCard,
  faChevronDown,
  faGraduationCap,
  faChartLine,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import Calculator from '../calculatorTool';
import PersonalLoanCalculation from '../Calculators/LoanCalculators/personalLoanCalculation';
import CreditCardMinAmount from '../Calculators/LoanCalculators/creditCardMinAmount';
import BirthDateCalculator from '../Calculators/HealthCalculators/BirthDateCalculator';
import IdealWeightCalculator from '../Calculators/HealthCalculators/idealWeightCalculator';
import VaccinationSchedule from '../Calculators/HealthCalculators/vaccinationSchedule';
import DiceRoll from '../Calculators/RaffleTools/diceRoll';
import CoinFlip from '../Calculators/RaffleTools/coinFlip';
import WheelOfFortune from '../Calculators/RaffleTools/wheelOfFortune';
import RaffleDraw from '../Calculators/RaffleTools/raffleDraw';
import TimeDifferenceCalculator from '../Calculators/TimeCalculators/timeDifferenceCalculator';
import DateDifferenceCalculator from '../Calculators/TimeCalculators/dateDifferenceCalculator';
import DayOfWeekCalculator from '../Calculators/TimeCalculators/dayOfWeekCalculator';
import DateManipulationCalculator from '../Calculators/TimeCalculators/dateManipulationCalculator';
import FactorialCalculator from '../Calculators/MathCalculators/factorialCalculator';
import RootCalculator from '../Calculators/MathCalculators/rootCalculator';
import PermutationCalculator from '../Calculators/MathCalculators/permutationCalculator';
import AreaCalculator from '../Calculators/MathCalculators/areaCalculator';
import CombinationCalculator from '../Calculators/MathCalculators/combinationCalculator';
import HighSchoolAverageCalculator from '../Calculators/SchoolCalculators/highSchoolAverageCalculator';
import LgsExamScore from '../Calculators/SchoolCalculators/LgsExamScore';
import StartingSchoolAge from '../Calculators/SchoolCalculators/startingSchoolAge';
import MsuExamScore from '../Calculators/SchoolCalculators/MsuExamScore';
import GoldPriceChart from '../Chart/goldPriceChart';
import SilverPriceChart from '../Chart/silverPriceChart';
import PlatinumPriceChart from '../Chart/platinumPriceChart';
import PalladiumPriceChart from '../Chart/palladiumPriceChart';
import InternetSpeedTest from '../Calculators/DailyCalculators/speedTest';

const categories = {
  math: {
    name: 'Matematik',
    icon: faSquareRootVariable,
    color: 'from-blue-400 to-indigo-500',
    tools: [
      { name: 'Hesap Makinesi', component: Calculator },
      { name: 'Faktöriyel', component: FactorialCalculator },
      { name: 'Kök', component: RootCalculator },
      { name: 'Permütasyon', component: PermutationCalculator },
      { name: 'Alan', component: AreaCalculator },
      { name: 'Kombinasyon', component: CombinationCalculator }
    ]
  },
  education: {
    name: 'Eğitim',
    icon: faGraduationCap,
    color: 'from-yellow-400 to-orange-500',
    tools: [
      { name: 'Lise Not Ortalaması', component: HighSchoolAverageCalculator },
      { name: 'LGS Puan Hesaplama', component: LgsExamScore },
      { name: 'Okula Başlama Yaşı', component: StartingSchoolAge },
      { name: 'MSÜ Puan Hesaplama', component: MsuExamScore }
    ]
  },
  economy: {
    name: 'Ekonomi',
    icon: faChartLine,
    color: 'from-green-400 to-teal-500',
    tools: [
      { name: 'Altın Fiyatları', component: GoldPriceChart },
      { name: 'Gümüş Fiyatları', component: SilverPriceChart },
      { name: 'Platin Fiyatları', component: PlatinumPriceChart },
      { name: 'Paladyum Fiyatları', component: PalladiumPriceChart }
    ]
  },
  loan: {
    name: 'Kredi/Borç',
    icon: faCreditCard,
    color: 'from-green-400 to-emerald-500',
    tools: [
      { name: 'İhtiyaç Kredisi Hesaplama', component: PersonalLoanCalculation },
      { name: 'Kredi Kartı Asgari Ödeme', component: CreditCardMinAmount }
    ]
  },
  health: {
    name: 'Sağlık',
    icon: faHeartPulse,
    color: 'from-red-400 to-pink-500',
    tools: [
      { name: 'Doğum Tarihi', component: BirthDateCalculator },
      { name: 'İdeal Kilo', component: IdealWeightCalculator },
      { name: 'Aşı Takvimi', component: VaccinationSchedule }
    ]
  },
  raffle: {
    name: 'Çekiliş',
    icon: faDice,
    color: 'from-purple-400 to-violet-500',
    tools: [
      { name: 'Zar At', component: DiceRoll },
      { name: 'Yazı Tura', component: CoinFlip },
      { name: 'Çarkıfelek', component: WheelOfFortune },
      { name: 'Çekiliş Yap', component: RaffleDraw }
    ]
  },
  time: {
    name: 'Zaman',
    icon: faClock,
    color: 'from-orange-400 to-amber-500',
    tools: [
      { name: 'Saat Farkı', component: TimeDifferenceCalculator },
      { name: 'Tarih Farkı', component: DateDifferenceCalculator },
      { name: 'Hangi Gün', component: DayOfWeekCalculator },
      { name: 'Tarih Hesaplama', component: DateManipulationCalculator }
    ]
  },
  daily: {
    name: 'Gündelik',
    icon: faTools,
    color: 'from-cyan-400 to-blue-500',
    tools: [
      { name: 'İnternet Hız Testi', component: InternetSpeedTest }
    ]
  }
};

const DropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTool(null);
    setIsOpen(false);
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="w-full">
      {/* Kategori Seçici */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex items-center justify-between hover:border-purple-500 dark:hover:border-purple-500 transition-colors duration-200"
        >
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {selectedCategory ? categories[selectedCategory].name : 'Kategori Seçin'}
          </span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              {Object.entries(categories).map(([key, category]) => (
                <motion.button
                  key={key}
                  whileHover={{ x: 4 }}
                  onClick={() => handleCategorySelect(key)}
                  className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                    selectedCategory === key ? 'bg-purple-50 dark:bg-purple-900/20' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={category.icon} className="text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Araçlar Grid */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {categories[selectedCategory].tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
            >
              <button
                onClick={() => handleToolSelect(tool)}
                className={`w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors duration-200 ${
                  selectedTool?.name === tool.name 
                    ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-500' 
                    : 'bg-white dark:bg-gray-800'
                }`}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {tool.name}
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Seçili Araç */}
      {selectedTool && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <selectedTool.component />
        </motion.div>
      )}
    </div>
  );
};

export default DropDown;