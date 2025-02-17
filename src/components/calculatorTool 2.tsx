import React, { useState } from 'react';
import { evaluate } from 'mathjs'; 

const Calculator = () => {
  const [input, setInput] = useState<string>('');  
  const [output, setOutput] = useState<string>(''); 


  const handleClick = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  // Temizleme
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  // Hesaplama
  const handleEvaluate = () => {
    try {
      const result = evaluate(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Geçersiz Değer');
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="mb-4">
        <input
          className="w-full text-right p-2 border rounded-md text-xl"
          value={input}
          readOnly
          placeholder="Hesaplama yapın"
        />
        <div className="text-right text-lg text-gray-500">{output}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('1')}
        >
          1
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('2')}
        >
          2
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('3')}
        >
          3
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md text-xl"
          onClick={() => handleClick('+')}
        >
          +
        </button>

        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('4')}
        >
          4
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('5')}
        >
          5
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('6')}
        >
          6
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md text-xl"
          onClick={() => handleClick('-')}
        >
          -
        </button>

        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md text-xl"
          onClick={() => handleClick('*')}
        >
          ×
        </button>

        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md text-xl"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md text-xl"
          onClick={() => handleClick('/')}
        >
          ÷
        </button>

        <button
          className="col-span-2 bg-green-500 text-white p-2 rounded-md text-xl"
          onClick={handleEvaluate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
