import { useState } from "react";
import { Button } from "@/components/ui/button";

const initialArray = [38, 27, 43, 3, 9, 82, 10, 5, 100];

type Step = {
  action: "split" | "merge";
  data: number[][];
};

const predefinedSteps: Step[] = [
  { action: "split", data: [[38, 27, 43, 3], [9, 82, 10, 5, 100]] },
  { action: "split", data: [[38, 27], [43, 3], [9, 82, 10, 5, 100]] },
  { action: "split", data: [[38], [27], [43, 3], [9, 82, 10, 5, 100]]},
  { action: "split", data: [[38], [27], [43],[3], [9, 82, 10, 5, 100]]},
  { action: "split", data: [[38], [27], [43],[3], [9, 82],  [10, 5, 100]]},
  { action: "split", data: [[38], [27], [43],[3], [9], [82],  [10, 5, 100]]},
  { action: "split", data: [[38], [27], [43],[3], [9], [82],  [10], [5, 100]]},
  { action: "split", data: [[38], [27], [43],[3], [9], [82],  [10], [5], [100]]},
  { action: "merge", data: [[27, 38], [43], [3], [9], [82], [10], [5], [100]]},
  { action: "merge", data: [[27, 38], [3, 43], [9], [82], [10], [5], [100]]},
  { action: "merge", data: [[27, 38], [3, 43], [9, 82], [10], [5], [100]]},
  { action: "merge", data: [[27, 38], [3, 43], [9, 82], [5, 10], [100]]},
  { action: "merge", data: [[27, 38], [3, 43], [9, 82], [5, 10, 100]]},
  { action: "merge", data: [[3, 27, 38, 43], [9, 82], [5, 10,100]]},
  { action: "merge", data: [[3, 27, 38, 43], [5, 9, 10, 82, 100]]},
  { action: "merge", data: [[3, 5, 9, 10, 27, 38, 43, 82, 100]]},
  { action: "merge", data: [[3, 5, 9, 10, 27, 38, 43, 82, 100]]},
];

export default function MergeSort() {
  const [stepIndex, setStepIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  // const handleAction = (clicked: "split" | "merge") => {
  //   const currentStep = predefinedSteps[stepIndex];
  //   if (!currentStep) return;

  //   if (clicked === currentStep.action) {
  //     setStepIndex((prev) => prev + 1);
  //     setMessage(`✅ Great job! Keep going! 😄`);
  //   } else {
  //     setMessage(
  //       clicked === "split"
  //         ? "❌ Oops! It's not time to split. Try merging instead! 🧩"
  //         : "❌ Oops! It's not time to merge. Try splitting instead! ➗"
  //     );
  //   }
  //   if (stepIndex === predefinedSteps.length-1) {
  //     setShowCongrats(true);
  //   }
  // };


  // const handleAction = (clicked: "split" | "merge") => {
  //   const currentStep = predefinedSteps[stepIndex];
    
  //   // Exit early if there is no current step
  //   if (!currentStep) return;
  
  //   // Only proceed if the clicked action matches the current action
  //   if (clicked === currentStep.action) {
  //     // If it's not the last step, display the message
  //     if (stepIndex < predefinedSteps.length - 1) {
  //       setStepIndex((prev) => prev + 1);
  //       setMessage(`✅ Great job! Keep going! 😄`);
  //     } else {
  //       // If it's the last step, show the congratulations pop-up
  //       setMessage(`✅ Array is fully sorted! 🎉`);
  //       setShowCongrats(true);
  //     }
  //   } else {
  //     // Display a different message if the action doesn't match
  //     setMessage(
  //       clicked === "split"
  //         ? "❌ Oops! It's not time to split. Try merging instead! 🧩"
  //         : "❌ Oops! It's not time to merge. Try splitting instead! ➗"
  //     );
  //   }
  // };
  
  const handleAction = (clicked: "split" | "merge") => {
    const currentStep = predefinedSteps[stepIndex];
  
    // ✅ If no step left (array already sorted)
    if (!currentStep) {
      setMessage("✅ Array is already fully sorted! 🎉");
      return;
    }
  
    // ✅ If the action is correct
    if (clicked === currentStep.action) {
      const isLastStep = stepIndex === predefinedSteps.length - 1;
  
      if (isLastStep) {
        // Final correct step
        setMessage("✅ Array is fully sorted! 🎉");
        setShowCongrats(true);
        setStepIndex((prev) => prev + 1); // Still move index to prevent further actions
      } else {
        setStepIndex((prev) => prev + 1);
        setMessage("✅ Great job! Keep going! 😄");
      }
    } else {
      // ❌ Wrong action
      setMessage(
        clicked === "split"
          ? "❌ Oops! It's not time to split. Try merging instead! 🧩"
          : "❌ Oops! It's not time to merge. Try splitting instead! ➗"
      );
    }
  };
  
  const handleReset = () => {
    setStepIndex(0);
    setMessage("");
    setShowCongrats(false);
  };

  const currentData =
    stepIndex === 0 ? [initialArray] : predefinedSteps[stepIndex - 1].data;

  const currentStep = predefinedSteps[stepIndex];

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="text-2xl font-bold mb-6 mt-20"> 🧠 Merge Sort Try It Yourself </h1>
      <p className="mt-2 mb-4"> Can you try to sort <b>[38, 27, 43, 3, 9, 82, 10, 5, 100] </b> into [3, 5, 9, 10, 27, 38, 43, 82, 100] </p>
      <div className="flex flex-col justify-center max-w-fit ml-4 mr-4 pb-14">
        <div className="flex flex-wrap gap-15 justify-center transition-all duration-500">
          {currentData?.map((group, index) => (
            <div
              key={index}
              className="flex gap-2 items-center border justify-center rounded-lg p-4 transition-all duration-300"
            >
              {group.map((num, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-16 h-16 bg-white text-center text-3xl text-black font-semibold rounded-lg cursor-pointer hover:bg-blue-300 transition-all duration-300"
                >
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <Button
            onClick={() => handleAction("split")}
            className="bg-green-600 hover:bg-green-700 text-lg font-semibold py-4 px-10 rounded-lg shadow-md"
          >
            ➗ Split
          </Button>
          <Button
            onClick={() => handleAction("merge")}
            className="bg-purple-600 hover:bg-purple-700 text-lg font-semibold py-4 px-10 rounded-lg shadow-md"
          >
            🧩 Merge
          </Button>
          <Button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-lg font-semibold py-4 px-10 rounded-lg shadow-md"
          >
            ♻️ Reset
          </Button>
        </div>
        {message && (
          <div className="mt-6 text-lg font-semibold text-center text-green-600">
            {message}
          </div>
        )}

{showCongrats && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm">
      <h2 className="text-2xl mb-4 font-semibold">Well Done! 🎉</h2>
      <div className="mt-4">
        <Button
          onClick={() => {
            setShowCongrats(false);
            handleReset(); // Reset the game
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Start Again
        </Button>
        <Button
          onClick={() => setShowCongrats(false)}
          className="bg-blue-600 hover:bg-blue-700 ml-4"
        >
          Close
        </Button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}
