// type Step = {
//     splits: (number | null)[][]; 
//     highlight: number[]; 
//     description: string;
//     explanation?: string;
//     reference?: (number | null)[][];
//     ref_highlight?: number[];
//   };
  
//   export const generateMergeSortSteps = (arr: number[]): Step[] => {
//     let steps: Step[] = [];
//     let auxArray = [...arr];
  
//     const mergeSort = (array: number[], left = 0, right = array.length - 1) => {
//       if (left >= right) return;
  
//       const mid = Math.floor((left + right) / 2);
  
//       // Capture split step BEFORE recursion
//       steps.push({
//         splits: [array.slice(left, mid + 1), array.slice(mid + 1, right + 1)],
//         highlight: [left, right],
//         description: `Splitting: Left ${array.slice(left, mid + 1)} | Right ${array.slice(mid + 1, right + 1)}`,
//         explanation: `Dividing the array at index ${mid}.`,
//       });
  
//       // Recursively split the left side first
//       mergeSort(array, left, mid);
  
//       // After the left side is fully processed, recursively split the right side
//       mergeSort(array, mid + 1, right);
  
//       // Merging happens after both left and right are processed
//       merge(array, left, mid, right);
//     };
  
//     const merge = (array: number[], left: number, mid: number, right: number) => {
//       let leftArr = array.slice(left, mid + 1);
//       let rightArr = array.slice(mid + 1, right + 1);
//       let i = 0, j = 0, k = left;
  
//       while (i < leftArr.length && j < rightArr.length) {
//         array[k++] = leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++];
//       }
  
//       while (i < leftArr.length) array[k++] = leftArr[i++];
//       while (j < rightArr.length) array[k++] = rightArr[j++];
  
//       // Save merge step AFTER recursion
//       steps.push({
//         splits: [array.slice(left, right + 1)],
//         highlight: [left, right],
//         description: `Merging: ${array.slice(left, right + 1)}`,
//         explanation: `Sorted parts are merged back together.`,
//         reference: [leftArr, rightArr],
//         ref_highlight: [0, 1],
//       });
//     };
  
//     mergeSort(auxArray);
//     return steps;
//   };
  

type Step = {
    splits: (number | null)[][];
    highlight: number[];
    currentElement?: number;
    description: string;
    explanation?: string;
    reference?: (number | null)[][];
    ref_highlight?: number[];
  };
  
  export const generateMergeSortSteps = (arr: number[]): Step[] => {
    let steps: Step[] = [];
    let auxArray = [...arr];
  
    const mergeSort = (array: number[], left = 0, right = array.length - 1) => {
      if (left >= right) return;
  
      const mid = Math.floor((left + right) / 2);
  
      mergeSort(array, left, mid);
      mergeSort(array, mid + 1, right);
      merge(array, left, mid, right);
    };
  
    const merge = (array: number[], left: number, mid: number, right: number) => {
      let leftArr = array.slice(left, mid + 1);
      let rightArr = array.slice(mid + 1, right + 1);
      let i = 0, j = 0, k = left;
  
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
          array[k++] = leftArr[i++];
        } else {
          array[k++] = rightArr[j++];
        }
      }
  
      while (i < leftArr.length) array[k++] = leftArr[i++];
      while (j < rightArr.length) array[k++] = rightArr[j++];
  
      // Save step
      steps.push({
        splits: [...array].map(num => [num]),
        highlight: [left, right],
        description: `Merging from index ${left} to ${right}`,
        explanation: `The sorted portions are merged to maintain order.`,
        reference: [leftArr, rightArr],
        ref_highlight: [0, 1],
      });
    };
  
    mergeSort(auxArray);
    return steps;
  };
  