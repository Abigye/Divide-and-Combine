import React, { useState, useEffect } from "react";
import MergeSortVisualizer from "../ui/visualiser_1";
import {MERGE_SORT_STEPS} from "../../constant/index";
import Modal from "../ui/modal";
import AnimationControl from "../ui/animation_control"
import Footer from "@/components/ui/footer";

const MergeSort: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const baseDelay = 3000;
  const delay = Math.max(baseDelay / selectedSpeed, 500);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

//   useEffect(() => {
//     let interval: any;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         // setCurrentStep((prev) => (prev >= MERGE_SORT_STEPS.length - 1 ? prev : prev + 1));
        
//       }, delay);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, delay]);

useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= MERGE_SORT_STEPS.length - 1) {
            setIsPlaying(false); // Stop playing when the last step is reached
            return prev;
          }
          return prev + 1;
        });
      }, delay);
    }
    return () => clearInterval(interval);
  }, [isPlaying, delay]);
  


  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, MERGE_SORT_STEPS.length - 1));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };
  const handleSpeedChange = (speed: number) => {
    setSelectedSpeed(speed);
  };
  return (

    <div className="flex-col justify-center max-w-fit ml-4 mr-4">
      <div className="mt-16 text-center">
        <h3 className="mt-3 mb-6 text-center"> MergeSort Visualiser One </h3>
        <div className="text-left">
          <p>
            Merge sort description is found{" "}
            <a href="/" target="_self">
              here
            </a>
            . The below shows how an array{" "}
           <em> [2, 1, 7, 6, 9, 5, 3] </em> could be sorted into
           <em> [1, 2, 3, 5, 6, 7, 9] </em> using merge sort, only
            showing the current step.
          </p>
        </div>
        </div>

        {/* <div className="mt-12 mb-12 border-2 border-white p-4 rounded-l">
        <MergeSortVisualizer steps={MERGE_SORT_STEPS} currentStep={currentStep} />
      </div>
   
      <div className="mt-6 flex justify-center">
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
        </div>  */}


<div className="mt-8 relative w-full min-h-[360px] max-h-[450px] border-2 border-white p-4 rounded-lg overflow-hidden item-center">
  <MergeSortVisualizer steps={MERGE_SORT_STEPS} currentStep={currentStep} />
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
      
    <div className="flex justify-center items-center mt-4">
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

export default MergeSort;
