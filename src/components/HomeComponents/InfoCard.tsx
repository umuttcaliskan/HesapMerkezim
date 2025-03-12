import React from 'react';
import Modal from '../modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormSuggestion from './FormSuggestion';
import FormHowToUse from './FormHowToUse';
import { motion } from 'framer-motion';

interface InfoCardProps {
  icon: any;
  title: string;
  description: string;
  buttonText: string;
  onclick: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  description, 
  title, 
  buttonText, 
  onclick, 
  isOpen, 
  onClose, 
  icon 
}) => {
  const renderForm = () => {
    switch (title) {
      case "Nasıl Kullanılır?":
        return <FormHowToUse />;
      case "Öneriniz mi var?":
        return <FormSuggestion />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0">
          <FontAwesomeIcon 
            icon={icon} 
            className="text-2xl text-gray-700 dark:text-gray-300" 
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
          onClick={onclick}
        >
          {buttonText}
        </motion.button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        {renderForm()}
      </Modal>
    </div>
  );
};

export default InfoCard;
