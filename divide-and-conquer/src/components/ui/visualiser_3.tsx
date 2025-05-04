import React, { useRef, useEffect } from "react";

type Step = {
  splits: (number | null)[][];
  highlight: number[]; // Holds indices to highlight for the current split
  currentElement?: number;
  description: string;
  explanation?: string;
  reference?: (number | null)[][];
  ref_highlight?: number[]; // Holds indices to highlight for the current merge
};

type MergeSortVisualizerProps = {
  steps: Step[];
  currentStep: number;
};

const MergeSortVisualizer: React.FC<MergeSortVisualizerProps> = ({ steps, currentStep }) => {
  const currentStepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentStepRef.current) {
      currentStepRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentStep]);

  if (!steps) return null;

  return (
    <div className="flex flex-col items-center w-full overflow-y-auto max-h-[450px]">
      <div className="flex flex-col gap-4 items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={index === currentStep ? currentStepRef : null}
            className={`p-15 w-full border-2 ${
              index === currentStep ? "border-8 border-green-500" : ""
            }`}
          >
            <div className="mt-2 text-center">
              <p className="text-base text-white italic">
                Step {index + 1}: {step.description}
              </p>
              {step.explanation && (
                <p className="text-sm text-white mt-2">
                  Explanation: {step.explanation}
                </p>
              )}
            </div>

            <div
              className="mt-1 mb-1 flex flex-row gap-14 items-center justify-center p-5 border-gray-300 shadow-md transition-all duration-300 ease-in-out"
            >
              {step.splits.map((split, splitIndex) => (
                <div key={splitIndex} className="inline-flex gap-0">
                   {split.map((value, index) => (
                    <div
                      key={index}
                      className={`w-20 h-20 flex items-center justify-center border text-black text-lg ${
                        step.highlight?.includes(splitIndex) 
                          ? "bg-green-400 border-green-800"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MergeSortVisualizer;

