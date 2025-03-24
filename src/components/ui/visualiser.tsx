import React from 'react';
import Split from './mergesort_one/split';

type Step = {
  splits: number[][];
  highlight: number[];
  description: string;
  explanation?: string;
};

type MergeSortVisualizerProps = {
  steps: Step[];
  currentStep: number;
};

const MergeSortVisualizer: React.FC<MergeSortVisualizerProps> = ({ steps, currentStep }) => {
  if (!steps || currentStep < 0 || currentStep >= steps.length) return null;

  const currentStepData = steps[currentStep];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Container for splits */}
      <div className="flex flex-row gap-15 items-center p-4 border border-gray-300 rounded-lg shadow-md ">
        {currentStepData.splits.map((split, splitIndex) => (
          <div
            key={splitIndex}
            className={`flex ${
              currentStepData.highlight.includes(splitIndex) ? 'gap-5' : 'gap-0'
            }`}
          >
            <Split
              values={split}
              isHighlighted={currentStepData.highlight.includes(splitIndex)}
            />
          </div>
        ))}
      </div>

      {/* Step description and explanation */}
      <div className="mt-4 text-center">
        <p className="text-base text-white italic">
          Step {currentStep}: {currentStepData.description}
        </p>
        <p className="text-sm text-white mt-2">
          Explanation: {currentStepData.explanation}
        </p>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;

























// import React from 'react';
// import Split from './mergesort_one/split';

// type Step = {
//   splits: number[][];
//   highlight: number[];
//   description: string;
// };

// type MergeSortVisualizerProps = {
//   steps: Step[];
//   currentStep: number;
// };

// const MergeSortVisualizer: React.FC<MergeSortVisualizerProps> = ({ steps, currentStep }) => {
//   if (!steps || currentStep < 0 || currentStep >= steps.length) return null;

//   return (
//     <div className="flex justify-center items-center w-full">
//       <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
//         {steps[currentStep].splits.map((split, splitIndex) => (
//           <Split
//             key={splitIndex}
//             values={split}
//             isHighlighted={steps[currentStep].highlight.includes(splitIndex)}
//             description={steps[currentStep].description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MergeSortVisualizer;
