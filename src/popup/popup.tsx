import React, { useState } from "react";
import './popup.css';
import Calculator from '../components/calculatorTool';
import DropDown from "../components/HomeComponents/DropDown";
import Modal from "../components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faClover, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import LuckyNumberGenerator from "../components/luckyNumberGenerator";
import HesapMerkezimLogo from '../assets/hesapMerkezimLogo.png';

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
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  };

  return (
    <div className="min-h-[600px] w-[400px] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Hesap Merkezim
        </h1>
        
        <div className="space-y-4">
          <DropDown />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Hızlı Erişim</h2>
        <div className="flex gap-3">
          <button 
            onClick={handleOpenModal}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faCalculator} className="text-xl" />
            <span>Hesap Makinesi</span>
          </button>
          
          <button 
            onClick={handleLuckyNumberGeneratorOpenModal}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faClover} className="text-xl" />
            <span>Şanslı Sayılar</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Tam Sürüm</h2>
        <button 
          onClick={handleUseButtonClick}
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition duration-300"
        >
          Uygulamayı Aç
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Calculator />
      </Modal>

      <Modal isOpen={isLuckyNumberGeneratorModalOpen} onClose={handleLuckyNumberGeneratorCloseModal}>
        <LuckyNumberGenerator />
      </Modal>

      <div className="flex justify-center items-center mt-auto flex-col">
        <a href="https://picksoso.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src={Logo} alt="Logo" className="h-[25px] object-contain" />
        </a>
        <p className="text-xs text-gray-400 font-sans mt-2">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Popup;
