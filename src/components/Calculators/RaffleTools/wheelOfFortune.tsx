import React, { useState, useRef } from 'react';
import { Trash2 } from 'lucide-react';

interface WheelSegment {
  id: string;
  value: string;
  color: string;
}

const WheelOfFortune: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([]);
  const [newValue, setNewValue] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const colors = [
    '#F15D63', '#4ECDC4', '#a2a2e3', '#1e2924',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB',
  ];

  const handleAddSegment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newValue.trim()) {
      const newSegment: WheelSegment = {
        id: Date.now().toString(),
        value: newValue.trim(),
        color: colors[segments.length % colors.length],
      };
      setSegments(prev => [...prev, newSegment]);
      setNewValue('');
    }
  };

  const handleRemoveSegment = (id: string) => {
    if (!isSpinning) {
      setSegments(prev => prev.filter(segment => segment.id !== id));
    }
  };

  const handleSpin = () => {
    if (!isSpinning && segments.length > 1) {
      setIsSpinning(true);
      setResult(null);
      
      const spinDegrees = 1800 + Math.random() * 1800;
      const finalRotation = rotation + spinDegrees;
      setRotation(finalRotation);

      setTimeout(() => {
        const segmentAngle = 360 / segments.length;
        const normalizedRotation = finalRotation % 360;
        const winningIndex = Math.floor(
          (360 - (normalizedRotation % 360)) / segmentAngle
        );
        setResult(segments[winningIndex % segments.length].value);
        setIsSpinning(false);
      }, 3000);
    }
  };

  const generateWheelPath = (index: number, total: number) => {
    const angle = 360 / total;
    const startAngle = index * angle;
    const endAngle = (index + 1) * angle;
    
    const start = polarToCartesian(200, 200, 200, startAngle);
    const end = polarToCartesian(200, 200, 200, endAngle);
    
    const largeArcFlag = angle <= 180 ? 0 : 1;
    
    return [
      'M', 200, 200,
      'L', start.x, start.y,
      'A', 200, 200, 0, largeArcFlag, 1, end.x, end.y,
      'Z'
    ].join(' ');
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angle: number) => {
    const angleInRadians = (angle - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const getTextPosition = (index: number, total: number) => {
    const angle = 360 / total;
    const midAngle = index * angle + angle / 2;
    const radius = 130;
    const pos = polarToCartesian(200, 200, radius, midAngle);
    return {
      x: pos.x,
      y: pos.y,
      rotation: midAngle > 90 && midAngle < 270 ? midAngle + 180 : midAngle
    };
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-4 space-y-8">
      <div className="w-full">
        <form onSubmit={handleAddSegment} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Yeni değer ekle"
              className="flex-1 p-2 border rounded"
              disabled={isSpinning}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSpinning || !newValue.trim()}
            >
              Ekle
            </button>
          </div>
        </form>

        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Değerler Listesi</h3>
          {segments.length === 0 ? (
            <p className="text-gray-500 italic">Henüz değer eklenmedi</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {segments.map((segment) => (
                <div 
                  key={segment.id}
                  className="flex items-center justify-between p-2 rounded hover:bg-gray-50 border"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="truncate">{segment.value}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveSegment(segment.id)}
                    disabled={isSpinning}
                    className="p-1 text-gray-500 hover:text-red-500 disabled:text-gray-300 disabled:cursor-not-allowed flex-shrink-0"
                    title="Sil"
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative w-[400px] h-[400px]">
        <svg 
          viewBox="0 0 400 400"
          className="w-full h-full transition-transform duration-[3000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {segments.map((segment, index) => (
            <g key={segment.id}>
              <path
                d={generateWheelPath(index, segments.length)}
                fill={segment.color}
                stroke="white"
                strokeWidth="1"
              />
              <text
                fill="white"
                fontWeight="bold"
                fontSize={segments.length > 8 ? "14" : "16"}
                textAnchor="middle"
                {...getTextPosition(index, segments.length)}
                transform={`rotate(${getTextPosition(index, segments.length).rotation}, 
                  ${getTextPosition(index, segments.length).x}, 
                  ${getTextPosition(index, segments.length).y})`}
              >
                {segment.value}
              </text>
            </g>
          ))}
        </svg>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-red-500 z-10" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleSpin}
          disabled={isSpinning || segments.length < 2}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="button"
        >
          {isSpinning ? 'Dönüyor...' : 'Çevir'}
        </button>

        {result && (
          <div className="text-xl font-bold text-center">
            Kazanan: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default WheelOfFortune;