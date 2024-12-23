import React, { useState } from 'react';

const AreaCalculator: React.FC = () => {
  const [shape, setShape] = useState<string>('rectangle');
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);
  const [base, setBase] = useState<number>(0);
  const [triangleHeight, setTriangleHeight] = useState<number>(0); 
  const [area, setArea] = useState<number | null>(null);  

  const handlePositiveInput = (value: number): number => {
    return value < 0 ? 0 : value;
  };

  const calculateArea = () => {
    let calculatedArea = 0;

    if (shape === 'rectangle') {
      calculatedArea = width * height;
    } else if (shape === 'circle') {
      calculatedArea = Math.PI * Math.pow(radius, 2);
    } else if (shape === 'triangle') {
      calculatedArea = 0.5 * base * triangleHeight;
    }

    setArea(calculatedArea);
  };

  return (
    <div className="max-w-[400px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Alan Hesaplayıcı</h2>
      
      <div className="mb-4">
        <label htmlFor="shape" className="block text-sm font-medium text-gray-700">Şekil Seçin</label>
        <select
          id="shape"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="rectangle">Dörtgen</option>
          <option value="circle">Daire</option>
          <option value="triangle">Üçgen</option>
        </select>
      </div>

      {shape === 'rectangle' && (
        <>
          <div className="mb-4">
            <label htmlFor="width" className="block text-sm font-medium text-gray-700">Genişlik</label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(handlePositiveInput(Number(e.target.value)))}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Yükseklik</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(handlePositiveInput(Number(e.target.value)))}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </>
      )}

      {shape === 'circle' && (
        <div className="mb-4">
          <label htmlFor="radius" className="block text-sm font-medium text-gray-700">Yarıçap</label>
          <input
            type="number"
            id="radius"
            value={radius}
            onChange={(e) => setRadius(handlePositiveInput(Number(e.target.value)))}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      )}

      {shape === 'triangle' && (
        <>
          <div className="mb-4">
            <label htmlFor="base" className="block text-sm font-medium text-gray-700">Taban</label>
            <input
              type="number"
              id="base"
              value={base}
              onChange={(e) => setBase(handlePositiveInput(Number(e.target.value)))}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="triangleHeight" className="block text-sm font-medium text-gray-700">Yükseklik</label>
            <input
              type="number"
              id="triangleHeight"
              value={triangleHeight}
              onChange={(e) => setTriangleHeight(handlePositiveInput(Number(e.target.value)))}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </>
      )}

      <button
        onClick={calculateArea}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hesapla
      </button>

      {area !== null && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold mt-4">Hesaplanan Alan:</p>
          <p className="text-lg">{area.toFixed(2)} cm²</p>
        </div>
      )}
    </div>
  );
};

export default AreaCalculator;