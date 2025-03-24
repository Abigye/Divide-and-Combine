type Step = {
  splits: (number | null)[][];
  highlight: number[];
  currentElement?: number;
  description: string;
  explanation?: string;
  reference?: (number | null)[][];
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



      {/* Reference array at the top */}
      {currentStepData.reference && (
        <div className="mb-4 flex flex-row gap-6 items-center p-2 border border-gray-300 shadow-md">
             <p className="text-sm text-gray-400 mb-1">Reference:</p>
          {currentStepData.reference.map((split, splitIndex) => (
            <div key={splitIndex} className="inline-flex gap-0">
              {split.map((value, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center border bg-gray-400 border-gray-600 text-black"
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Container for splits */}
      <div className="mt-6 mb-2 flex flex-row gap-14 items-center p-4 border border-gray-300  shadow-md bg-gray-800">
        {currentStepData.splits.map((split, splitIndex) => (
          <div key={splitIndex} className="inline-flex gap-0">
            {split.map((value, index) => (
              <div
                key={index}
                className={`w-20 h-20 flex items-center justify-center border  ${
                  currentStepData.highlight.includes(splitIndex)
                    ? 'bg-green-400 border-green-800 text-black'
                    : 'bg-gray-200 border-gray-400 text-black'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Current element being sorted */}
      {currentStepData.currentElement !== undefined && (
        <div className="mt-2">
          <div className="w-20 h-20 flex items-center justify-center border rounded-md bg-blue-400">
            {currentStepData.currentElement}
          </div>
          <p className="text-sm mt-1 italic">Current element</p>
        </div>
      )}

      {/* Step description and explanation */}
      <div className="mt-4 text-center">
        <p className="text-base text-white italic">
          Step {currentStep + 1}: {currentStepData.description}
        </p>
        {currentStepData.explanation && (
          <p className="text-sm text-white mt-2">
            Explanation: {currentStepData.explanation}
          </p>
        )}
      </div>
    </div>
  );
};



// const MergeSortVisualizer: React.FC<Props> = ({ steps, currentStep }) => {
//   const { description, explanation, splits, highlight } = steps[currentStep];

//   return (
//     <div className="p-6 bg-gray-100 rounded-xl shadow-lg max-w-3xl mx-auto">
//       <h2 className="text-xl font-semibold mb-2">{description}</h2>
//       <p className="text-gray-600 mb-4">{explanation}</p>
//       <div className="flex flex-col gap-2">
//         {splits.map((part, partIndex) => (
//           <div key={partIndex} className="flex gap-2">
//             {part.map((value, index) => (
//               <div
//                 key={index}
//                 className={`p-3 border rounded-md ${
//                   highlight.includes(index + partIndex * 2)
//                     ? "bg-green-300 border-green-500"
//                     : "bg-white border-gray-300"
//                 }`}
//               >
//                 {value !== null ? value : "-"}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default MergeSortVisualizer;
