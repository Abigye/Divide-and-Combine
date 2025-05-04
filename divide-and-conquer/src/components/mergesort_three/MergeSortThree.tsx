import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MergeSortVisualizer from "../ui/visualiser_3";
import { FULL_STEPS } from "../../constant/index";
import Modal from "../ui/modal";
import AnimationControl from "../ui/animation_control"
import Footer from "../ui/footer";


const MergeSortThree: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const baseDelay = 3000;
  const delay = Math.max(baseDelay / selectedSpeed, 500);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

    useEffect(() => {
        let interval: any;
        if (isPlaying) {
        interval = setInterval(() => {
            setCurrentStep((prev) => {
            if (prev >= FULL_STEPS.length - 1) {
                setIsPlaying(false);
                return prev;
            }
            return prev + 1;
            });
        }, delay);
        }
        return () => clearInterval(interval);
    }, [isPlaying, delay]);
    

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, FULL_STEPS.length - 1));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };
  const handleSpeedChange = (speed: number) => {
    setSelectedSpeed(speed);
  };
  return (

    <div className="flex-col justify-center max-w-fit ml-4 mr-4 pb-12">
    <div className="mt-16 text-center">
        <h3 className="mt-3 mb-6 text-center"> Merge Sort Full Depth View </h3>
    <div className="text-left">
      <p>
        A description of merge sort can be found{" "}
        <Link to="/home#merge-sort" className="text-blue-500 underline">here</Link>
{/* 
        <a href="/home#merge-sort" target="_self" className="text-blue-500 hover:underline">
          here
        </a> */}
        . The example below shows how an array{" "}
        <em>[2, 1, 7, 6, 9, 5, 3]</em> can be sorted into{" "}
        <em>[1, 2, 3, 5, 6, 7, 9]</em> using the bottom up approach, highlighting each step
        in the process.
      </p>
    </div>
</div>

<div className="mt-8 relative w-full min-h-[360px] max-h-[450px] border-2 p-4 rounded-lg overflow-hidden items-center">
  <MergeSortVisualizer steps={FULL_STEPS} currentStep={currentStep} />
</div>


<div className="mt-4 flex justify-center">
  {/* Controls */}
  <AnimationControl
    isPlaying={isPlaying}
    selectedSpeed={selectedSpeed}
    speedOptions={speedOptions}
    onPlayPause={handlePlayPause}
    onNext={handleNext}
    onPrevious={handlePrevious}
    onReset={handleReset}
    onSpeedChange={handleSpeedChange}
  />
</div>
      {/* Modal */}
      <p className='mt-9 italic text-center'> Note: This visualizer is meant to provide a higher-level explanation of
        how Merge Sort works and does not follow the exact steps of the code.
        <br />
        To see how this algorithm is implemented, click the button to see the
        code in various programing languages.</p>
      
    <div className="flex justify-center items-center mt-4 mb-16">
    <div className="border-2 border-white rounded-md">
        <button
            onClick={toggleModal}
            className="px-4 py-3 text-white bg-black hover:bg-blue-600 transition"
        >
            Show Code
        </button>
    </div>
</div>

      {isModalOpen && <Modal toggleModal={toggleModal} />}
      <Footer />
    </div>
  );
};

export default MergeSortThree;
