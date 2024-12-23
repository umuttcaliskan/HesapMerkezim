import React from 'react';
import Modal from '../modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormSuggestion from './FormSuggestion';
import FormHowToUse from './FormHowToUse';

function InfoCard({ description, title, buttonText, onclick, isOpen, onClose, icon }) {

    const renderForm = () => {
        switch (title) {
            case "Nasıl Kullanılır ?":
                return <FormHowToUse />;
            case "Öneriniz mi var ?":
                return <FormSuggestion />;
            default:
                return null;
        }
    };

    return (
        <div className="border-2 flex flex-col items-center w-full sm:w-[45%] lg:w-[40%] justify-between border-blue-800 bg-blue-600 rounded-lg">
            <FontAwesomeIcon icon={icon} className="text-2xl p-4 text-white" />
            <h1 className="text-2xl text-center text-yellow-400 font-bold font-serif">{title}</h1>
            <p className="text-white text-center p-4 text-sm">{description}</p>
            <button
                className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center mb-4"
                onClick={onclick}
            >
                {buttonText}
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
                {renderForm()}
            </Modal>
        </div>
    );
}

export default InfoCard;
