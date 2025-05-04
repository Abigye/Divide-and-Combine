import React from 'react';
// import { Lightning, Cpu, PuzzlePiece, MagnifyingGlass, SquaresFour, ChartBar, Warning, Archive } from '@phosphor-icons/react';


interface CardData {
  key: string;
  description: string;
  image?: string;
}

interface CardGridProps {
  data: CardData[];
  showImage?: boolean;
}

const CardGrid: React.FC<CardGridProps> = ({ data, showImage = true }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-3">
      {data.map((item) => (
        <div key={item.key} className="bg-white border border-gray-300 rounded-xl shadow-lg p-6">
          {showImage && item.image && (
            <img
              src={item.image}
              alt={item.key}
              className="w-full h-50 rounded-t-xl mb-2"
            />
          )}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.key}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
