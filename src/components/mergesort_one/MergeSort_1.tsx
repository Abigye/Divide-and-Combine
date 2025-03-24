
import React, { useState, useEffect } from "react";

import MergeSortVisualizer from "../ui/visualiser";

import { STEPS } from "../../constant/index";

import Modal from "../ui/modal";

const MergeSort: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]; // Speed options in x format

  // Adjust the base delay for slower animation
  const baseDelay = 4000;
  const delay = Math.max(baseDelay / selectedSpeed, 500);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  //   // Merging Phase
  //   {
  //     description: "Merging [2] and [1] into [1, 2].",
  //     explanation:
  //       "Compare 2 with 1. Since 1 is smaller, it comes first in the merged list, followed by 2.",
  //     splits: [[1, 2], [7], [6], [9], [5], [3]],
  //     highlight: [0],
  //   },
  //   {
  //     description: "Merging [7] and [6] into [6, 7].",
  //     explanation:
  //       "Compare 7 with 6. Since 6 is smaller, it comes first in the merged list, followed by 7.",
  //     splits: [[1, 2], [6, 7], [9], [5], [3]],
  //     highlight: [1],
  //   },
  //   {
  //     description: "Merging [9] and [5] into [5, 9].",
  //     explanation:
  //       "Compare 9 with 5. Since 5 is smaller, it comes first in the merged list, followed by 9.",
  //     splits: [[1, 2], [6, 7], [5, 9], [3]],
  //     highlight: [2],
  //   },
  //   {
  //     description: "Merging [1, 2] and [6, 7] into [1, 2, 6, 7].",
  //     explanation:
  //       "Compare the smallest elements of both lists. 1 and 2 come first from the left list, followed by 6 and 7 from the right list.",
  //     splits: [[1, 2, 6, 7], [5, 9], [3]],
  //     highlight: [0],
  //   },
  //   {
  //     description: "Merging [3] and [5, 9] into [3, 5, 9].",
  //     explanation:
  //       "Compare 3 with 5, then 3 with 9. Since 3 is the smallest, it comes first, followed by 5, and then 9.",
  //     splits: [
  //       [1, 2, 6, 7],
  //       [3, 5, 9],
  //     ],
  //     highlight: [1],
  //   },
  //   {
  //     description:
  //       "Merging [1, 2, 6, 7] and [3, 5, 9] into [1, 2, 3, 5, 6, 7, 9].",
  //     explanation:
  //       "Compare the smallest elements of both lists. Start with 1, then 2, then 3, and so on, adding each smaller element in order until the lists are fully merged.",
  //     splits: [[1, 2, 3, 5, 6, 7, 9]],
  //     highlight: [0],
  //   },
  // ];

  useEffect(() => {
    let interval: any;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          // Check if the current step is the last step
          if (prev >= STEPS.length - 1) {
            setIsPlaying(false); // Stop the animation
            return prev; // Stay at the last step
          }
          return prev + 1; // Move to the next step
        });
      }, delay);
    }
    return () => clearInterval(interval);
  }, [isPlaying, delay]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCurrentStep((_) => 0);
    setIsPlaying(false);
  };

  return (
    <div className="flex-col justify-center  max-w-fit ml-4 mr-4">
      <div className="mt-16 text-center">
        <h3 className="mt-2 mb-6 text-center"> MergeSort Visualiser One </h3>
        <div className="text-left">
          <p>
            Merge sort description is found{" "}
            <a href="/" target="_self">
              here
            </a>
            . The below shows how an array{" "}
            <strong>[2, 1, 7, 6, 9, 5, 3]</strong> could be sorted into
            <strong> [1, 2, 3, 5, 6, 7, 9]</strong> using merge sort, only
            showing the current step.
          </p>
        </div>
        <MergeSortVisualizer steps={STEPS} currentStep={currentStep} />

        {/* CONTROLS */}
        <div className="animation-controls">
          <button onClick={handlePrevious}>⏪</button>
          <button onClick={handlePlayPause}>{isPlaying ? "⏸️" : "▶️"}</button>
          <button onClick={handleNext}>⏩</button>
          <button onClick={handleReset}>🔄</button>
          <div className="speed-control">
            <button onClick={() => setShowDropdown(!showDropdown)}>
              <p style={{ fontSize: "18px" }}>Speed: {selectedSpeed}x</p>
              <span className="dropdown-arrow">▼</span>{" "}
            </button>
            {showDropdown && (
              <ul className="speed-dropdown">
                {speedOptions.map((speed) => (
                  <li
                    key={speed}
                    onClick={() => {
                      setSelectedSpeed(speed);
                      setShowDropdown(false);
                    }}
                  >
                    {speed}x
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Modal*/}
        <p>
          Note: This visualizer is meant to provide a higher-level explanation
          of how Merge Sort works and does not follow the exact steps of the
          code.
          <br />
          To see how this algorithm is implemented, click the button to see the
          code in various programing languages.
        </p>

        <button onClick={toggleModal} style={{ border: "1px solid" }}>
          Show Merge Sort Code
        </button>

        {/* Conditionally render the modal */}
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default MergeSort;



   {/* <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={handlePrevious}
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <span className="text-4xl">⏪</span>
        </button>
        <button
          onClick={handlePlayPause}
          className={`px-5 py-2 text-white rounded-md ${
            isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          } transition`}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 text-white rounded-md hover:bg-blue-600 transition"
        >
        <span className="text-4xl">⏩</span>
        </button>
        <button
          onClick={handleReset}
          className="px-5 py-2 text-white rounded-md hover:bg-gray-400 transition"
        >
          <span className="text-4xl">🔄</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md border border-gray-400"
          >
            Speed: {selectedSpeed}x ▼
          </button>
          {showDropdown && (
            <ul className="absolute left-1/2 -translate-x-1/2 border rounded-md mt-1 shadow-lg z-10">
              {speedOptions.map((speed) => (
                <li
                  key={speed}
                  onClick={() => {
                    setSelectedSpeed(speed);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-600 cursor-pointer"
                >
                  {speed}x
                </li>
              ))}
            </ul>
          )}
        </div>
      </div> */}