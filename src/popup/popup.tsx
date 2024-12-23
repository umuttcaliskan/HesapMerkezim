import React, { useState } from "react";
import './popup.css';
import Calculator from '../components/calculatorTool';
import DropDown from "../components/HomeComponents/DropDown";
import Modal from "../components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator , faClover , faQuestion} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png'
import LuckyNumberGenerator from "../components/luckyNumberGenerator";
import HesapMerkezimLogo from '../assets/hesapMerkezimLogo.png'

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [isLuckyNumberGeneratorModalOpen, setIsLuckyNumberGeneratorModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLuckyNumberGeneratorOpenModal = () => {
    setIsLuckyNumberGeneratorModalOpen(true);
  };

  const handleLuckyNumberGeneratorCloseModal = () => {
    setIsLuckyNumberGeneratorModalOpen(false);
  };

  const handleUseButtonClick = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/') });
  };



  return (
    <div className="relative">
      <h1 className="text-3xl italic text-center p-4 text-red-500 font-bold font-serif">Hesap Merkezim</h1>

      <div className="fixed right-3 bottom-3">
      <button 
        onClick={handleOpenModal}
        className="right-3 bottom-3 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-200"
      >
        <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
      </button>

      <button 
        onClick={handleLuckyNumberGeneratorOpenModal}
        className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 right-3 bottom-3 mt-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition duration-200"
      >
        <FontAwesomeIcon icon={faClover} className="text-2xl" />
      </button>

      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Calculator />
      </Modal>

      <Modal isOpen={isLuckyNumberGeneratorModalOpen} onClose={handleLuckyNumberGeneratorCloseModal}>
        <LuckyNumberGenerator />
      </Modal>
      
      <DropDown />

      <div className="flex mt-4 justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg m-2 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Hesap Merkezim Nasıl Kullanılır ?
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Hesaplama Merkezi eklentimizi Google Chrome tarayıcınıza ekleyerek uzantılardan erişebilirsiniz.
        </p>
        <button 
        onClick={handleUseButtonClick}
        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">
          Başlayalım!
        </button>
      </div>
    </div>

      <div>

      </div>

      <div className="flex justify-center items-center mt-5 mb-1 flex-col">
        <a href="https://picksoso.com/" target="_blank" rel="noopener noreferrer">
         <img src={Logo} alt="Logo" className="h-[30px] object-contain" />
        </a>
        <p className="text-[10px] text-gray-300 font-sans mt-1 mb-1">Version 1.0.0</p>
      </div>

    </div>
  );
};

export default Popup;
