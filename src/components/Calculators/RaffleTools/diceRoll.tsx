import React, { useState } from 'react';
import './diceRoll.css';

interface DieProps {
  value: number;
  isRolling: boolean;
}

const Die: React.FC<DieProps> = ({ value, isRolling }) => {
  const dots = Array(value).fill(0);
  
  return (
    <div className={`die ${isRolling ? 'rolling' : ''}`}>
      <div className="die-face">
        <div className={`dots dots-${value}`}>
          {dots.map((_, index) => (
            <div key={index} className="dot" />
          ))}
        </div>
      </div>
    </div>
  );
};

const DiceRoll: React.FC = () => {
  const [numDice, setNumDice] = useState<number>(1);
  const [diceValues, setDiceValues] = useState<number[]>([6]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [totalValue, setTotalValue] = useState<number>(6);

  const rollDice = () => {
    setIsRolling(true);
    
    {/* Rastgele Değer Üretme*/}
    setTimeout(() => {
      const newValues = Array(numDice)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1);
      
      setDiceValues(newValues);
      setTotalValue(newValues.reduce((a, b) => a + b, 0));
      setIsRolling(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">Zar At</h2>

      <div className="mb-6 flex items-center gap-4 border-2 p-2 rounded-lg">
        <label className="text-lg">Zar Sayısı:</label>
        <select
          value={numDice}
          onChange={(e) => {
            const newNum = parseInt(e.target.value);
            setNumDice(newNum);
            setDiceValues(Array(newNum).fill(6));
          }}
          className="p-2 rounded-lg"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="dice-container mb-6 flex gap-4 flex-wrap justify-center">
        {diceValues.map((value, index) => (
          <Die key={index} value={value} isRolling={isRolling} />
        ))}
      </div>

      <button
        onClick={rollDice}
        disabled={isRolling}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isRolling ? 'Zarlar Atılıyor...' : 'Zar At'}
      </button>

      {!isRolling && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">
            Toplam: {totalValue}
          </p>
          <p className="text-lg mt-2">
            Zarlar: {diceValues.join(' + ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default DiceRoll;