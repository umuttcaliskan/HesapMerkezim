import React, { useState } from 'react';
import './coinFlip.css';

const CoinFlip: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipResult, setFlipResult] = useState<'heads' | 'tails' | null>(null);

  const handleCoinFlip = () => {
    setIsFlipping(true);
    setFlipResult(null);

    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    setTimeout(() => {
      setFlipResult(result);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-white p-6 ">
      <h2 className="text-3xl font-bold mb-6">Yazı Tura At</h2>

      <div className="coin-container mb-6">
        <div className={`coin ${isFlipping ? 'flip' : ''} ${flipResult === 'tails' ? 'show-tails' : ''}`}>
          <div className="front">
            Yazı
          </div>
          <div className="back">
            Tura
          </div>
        </div>
      </div>

      <button
        onClick={handleCoinFlip}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        disabled={isFlipping}
      >
        Yazı Tura At
      </button>

      {flipResult && !isFlipping && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">{flipResult === 'heads' ? 'Yazı' : 'Tura'} geldi!</p>
        </div>
      )}
    </div>
  );
};

export default CoinFlip;