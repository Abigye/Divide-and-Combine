import React from 'react';

type AnimationControlProps = {
  isPlaying: boolean;
  selectedSpeed: number;
  speedOptions: number[];
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
};

const AnimationControl: React.FC<AnimationControlProps> = ({
  isPlaying,
  selectedSpeed,
  speedOptions,
  onPlayPause,
  onNext,
  onPrevious,
  onReset,
  onSpeedChange,
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="h-14 w-14 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        <span className="text-3xl">⏪</span>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={onPlayPause}
        className={`h-14 w-14 flex justify-center items-center text-white rounded-md bg-blue-500 ${
          isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        } transition`}
      >
        <span className="text-3xl">{isPlaying ? '⏸️' : '▶️'}</span>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="h-14 w-14 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        <span className="text-3xl">⏩</span>
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="h-14 w-14 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        <span className="text-3xl">🔄</span>
      </button>

      {/* Speed Control */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="h-14 w-28 flex justify-center items-center bg-blue-500 text-white rounded-md border border-gray-400"
        >
          Speed: {selectedSpeed}x ▼
        </button>
        {showDropdown && (
          <ul className="absolute left-1/2 -translate-x-1/2 border rounded-md mt-1 shadow-lg z-10 bg-white">
            {speedOptions.map((speed) => (
              <li
                key={speed}
                onClick={() => {
                  onSpeedChange(speed);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-black"
              >
                {speed}x
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AnimationControl;
