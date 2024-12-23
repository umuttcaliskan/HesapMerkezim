import React, { useState } from "react";
import Calculator from '../../components/calculatorTool';
import DropDown from "../../components/HomeComponents/DropDown";
import Modal from "../../components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faLightbulb, faGlobe, faQuestion ,  faClover} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import CookieModal from "./CookieModal";
import Slider from '../../assets/slider.png';
import InfoCard from "../../components/HomeComponents/InfoCard";
import LuckyNumberGenerator from "../../components/luckyNumberGenerator";

const Home = () => {
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isFormHowToUseModalOpen, setIsFormHowToUseModalOpen] = useState(false);
  const [isFormSuggestionModalOpen, setIsFormSuggestionModalOpen] = useState(false);
  const [isLuckyNumberGeneratorModalOpen, setIsLuckyNumberGeneratorModalOpen] = useState(false);

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

  return (
    <div>
      {/* Ücretsiz Tarayıcıya Ekle Butonu */}
      <div className="flex justify-center items-center px-4">
        <button 
          className="bg-black text-white font-bold py-3 w-full sm:w-[50%] lg:w-[40%] px-6 mt-5 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none transition duration-300 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGlobe} className="text-2xl mr-2" />
          Ücretsiz Tarayıcına Ekle
        </button>
      </div>

      <div className="relative flex flex-col md:flex-row">
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-center">
        <h1 className="text-3xl italic text-center p-4 text-red-500 font-bold font-serif">Hesap Merkezim</h1>

          <div className="mt-4 items-center">
            <p className="text-xl text-gray-700 mb-6 text-center">
              Hesaplama araçlarını kullarak hızlı çözüme kolayca ulaşabilirsin!
            </p>

            {/* Sabitlenmiş Hesap Makinesi Butonu */}
            <div className="fixed right-5 top-1/2 transform -translate-y-1/2">
             <button 
               onClick={handleCalculatorOpenModal}
               className="w-12 sm:w-20 h-12 sm:h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-200"
               >
              <FontAwesomeIcon icon={faCalculator} className="text-3xl  sm:text-5xl" />
             </button>

             <button 
               onClick={handleLuckyNumberGeneratorOpenModal}
               className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 w-12 sm:w-20 h-12 sm:h-20 mt-4 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-200"
               >
              <FontAwesomeIcon icon={faClover} className="text-3xl sm:text-5xl" />

             </button>
            </div>
            
            
            <Modal isOpen={isCalculatorModalOpen} onClose={handleCalculatorCloseModal}>
              <Calculator />
            </Modal>

            <Modal isOpen={isLuckyNumberGeneratorModalOpen} onClose={handleLuckyNumberGeneratorCloseModal}>
              <LuckyNumberGenerator />
            </Modal>

            <DropDown />
          </div>
        </div>

        {/* Slider Kısmı */}
        <div className="flex-1 hidden md:flex p-8 flex-col items-center justify-center">
          <div className="mb-8 mt-2">
            <img src={Slider} alt="Slider" className="mx-auto w-[80%]" />
          </div>
        </div>
      </div>

      {/* Bilgi Kartları */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <InfoCard 
          icon={faQuestion}
          title={"Nasıl Kullanılır ?"}
          description={"Hesaplama Merkezi eklentimizi Google Chrome tarayıcınıza ekleyerek uzantılardan erişebilirsiniz."}
          buttonText={"Kullanım Kılavuzuna Göz At"}
          onclick={handleFormHowToUseOpenModal}
          isOpen={isFormHowToUseModalOpen}
          onClose={handleFormHowToUseCloseModal}
        />

        <InfoCard
          icon={faLightbulb}
          title="Öneriniz mi var ?"
          description="Hesaplama araçlarımızı sizden gelen öneriler doğrultusunda sürekli olarak geliştiriyoruz."
          buttonText="Öneride Bulun"
          onclick={handleFormSuggestionOpenModal}
          isOpen={isFormSuggestionModalOpen}
          onClose={handleFormSuggestionCloseModal}
        />
      </div>

      <CookieModal />
      <Footer />
    </div>
  );
};

export default Home;
