import React, { useState, useEffect } from "react";
import Calculator from '../../components/calculatorTool';
import DropDown from "../../components/HomeComponents/DropDown";
import Modal from "../../components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faLightbulb, 
  faGlobe, 
  faQuestion, 
  faClover,
  faChartLine,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import CookieModal from "./CookieModal";
import Slider from '../../assets/slider.png';
import InfoCard from "../../components/HomeComponents/InfoCard";
import LuckyNumberGenerator from "../../components/luckyNumberGenerator";
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isFormHowToUseModalOpen, setIsFormHowToUseModalOpen] = useState(false);
  const [isFormSuggestionModalOpen, setIsFormSuggestionModalOpen] = useState(false);
  const [isLuckyNumberGeneratorModalOpen, setIsLuckyNumberGeneratorModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Hesap Makinesi",
      description: "Gelişmiş finansal hesaplamalar için özel tasarlanmış hesap makinesi",
      icon: faCalculator,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Şanslı Sayılar",
      description: "Günlük şanslı sayılarınızı öğrenin",
      icon: faClover,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Finansal Analizler",
      description: "Detaylı finansal analiz araçları",
      icon: faChartLine,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const handleCalculatorOpenModal = () => {
    setIsCalculatorModalOpen(true);
  };

  const handleCalculatorCloseModal = () => {
    setIsCalculatorModalOpen(false);
  };

  const handleFormHowToUseOpenModal = () => {
    setIsFormHowToUseModalOpen(true);
  };

  const handleFormHowToUseCloseModal = () => {
    setIsFormHowToUseModalOpen(false);
  };

  const handleFormSuggestionOpenModal = () => {
    setIsFormSuggestionModalOpen(true);
  };

  const handleFormSuggestionCloseModal = () => {
    setIsFormSuggestionModalOpen(false);
  };

  const handleLuckyNumberGeneratorOpenModal = () => {
    setIsLuckyNumberGeneratorModalOpen(true);
  };

  const handleLuckyNumberGeneratorCloseModal = () => {
    setIsLuckyNumberGeneratorModalOpen(false);
  };

  const handleDownloadExtension = () => {
    const link = document.createElement('a');
    link.href = '/dist.crx';
    link.download = 'hesap-merkezim-extension.crx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-8 inline-block">
                  Yeni Özellik: Finansal Hesaplamalar 🚀
                </span>
              </motion.div>
              
              <h1 className="mt-6 text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Hesap Merkezim
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tüm finansal hesaplamalarınız için modern ve kullanıcı dostu araçlar sunan 
                tek platform.
              </p>

              <div className="mt-10 flex justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadExtension}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>Tarayıcına Ekle</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCalculatorOpenModal}
                  className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
                >
                  Hemen Dene
                </motion.button>
              </div>
            </motion.div>

            {/* Feature Showcase */}
            <div className="mt-20">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${features[activeFeature].color} mb-6`}>
                      <FontAwesomeIcon 
                        icon={features[activeFeature].icon} 
                        className="text-2xl text-white" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {features[activeFeature].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hızlı İşlemler
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <button 
                  onClick={handleCalculatorOpenModal}
                  className="w-full h-full flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCalculator} className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Hesap Makinesi
                  </h3>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <button 
                  onClick={handleLuckyNumberGeneratorOpenModal}
                  className="w-full h-full flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faClover} className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Şanslı Sayılar
                  </h3>
                </button>
              </motion.div>
            </div>

            <div className="mt-8">
              <DropDown />
            </div>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Bilgi & Destek
            </h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <InfoCard 
                  icon={faQuestion}
                  title="Nasıl Kullanılır?"
                  description="Detaylı kullanım kılavuzuna göz atın"
                  buttonText="Kılavuzu Aç"
                  onclick={handleFormHowToUseOpenModal}
                  isOpen={isFormHowToUseModalOpen}
                  onClose={handleFormHowToUseCloseModal}
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <InfoCard
                  icon={faLightbulb}
                  title="Öneriniz mi var?"
                  description="Görüşlerinizi bizimle paylaşın"
                  buttonText="Öneri Gönder"
                  onclick={handleFormSuggestionOpenModal}
                  isOpen={isFormSuggestionModalOpen}
                  onClose={handleFormSuggestionCloseModal}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isCalculatorModalOpen && (
          <Modal isOpen={isCalculatorModalOpen} onClose={handleCalculatorCloseModal}>
            <Calculator />
          </Modal>
        )}

        {isLuckyNumberGeneratorModalOpen && (
          <Modal isOpen={isLuckyNumberGeneratorModalOpen} onClose={handleLuckyNumberGeneratorCloseModal}>
            <LuckyNumberGenerator />
          </Modal>
        )}
      </AnimatePresence>

      <CookieModal />
      <Footer />
    </div>
  );
};

export default Home;
