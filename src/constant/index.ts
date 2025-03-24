export const PRINCIPLES = [
    {
      key: 'Divide',
      description:
        'Split the problem into smaller subproblems that are easier to handle. These subproblems should be of a size that is manageable or simple to solve.',
        image: '/src/assets/images/divide.png',
    },
    {
      key: 'Conquer',
      description:
        'Solve the smaller subproblems. If the subproblems are still large, apply the divide and conquer technique recursively.',
        image: '/src/assets/images/conquer.png',
    },
    {
      key: 'Combine',
      description:
        'After solving the subproblems, combine the solutions to get the final result. This step is critical to ensure that the solution is valid and addresses the original problem.',
        image: '/src/assets/images/combine.png',
    },
  ];


export const MERGESORT = [
{
    key: 'Divide',
    description:'The array is divided into two halves until each subarray contains a single element.',
},
{
    key: 'Conquer',
    description:'Each half is sorted recursively. The sorting is done by comparing individual elements and arranging them in order.',
},
{
    key: 'Combine',
    description:'The sorted halves are merged together to form the final sorted array. Elements from both halves are compared and placed in the correct order.',
},
]

export const BINARY_SEARCH = [
    {
        key: 'Divide',
        description: 'Split the array in half and compare the middle element to the target value.',
      },
      {
        key: 'Conquer',
        description: 'Search the left or right half based on comparison.',
      },
      {
        key: 'Combine',
        description: 'The solution is found when the target is located or the search space is empty.',
      },
]


export const QUICKSORT = [
      {
        key: 'Divide',
        description: 'Pick a pivot element and partition the array into two subarrays: elements smaller than the pivot and elements larger than the pivot. The pivot is placed in its correct position.',
      },
      {
        key: 'Conquer',
        description: 'Recursively apply the same process to the left and right subarrays.',
      },
      {
        key: 'Combine',
        description: 'Since the subarrays are already sorted, combining them involves simply placing the pivot between them.',
      }
]


export const STRASSEN_MATRIX  = [
    {
      key: 'Divide',
      description: 'Divide the matrices into smaller submatrices until they are small enough to be multiplied directly.',
    },
    {
      key: 'Conquer',
      description: 'Recursively multiply the submatrices using matrix multiplication rules.',
    },
    {
      key: 'Combine',
      description: 'Combine the results of the submatrix multiplications to form the final product matrix.',
    },
  ];
  

export const MERGE_SORT_STEPS  = [
    {
      description: "Initial State",
      explanation:
        "The original array is [2, 1, 7, 6, 9, 5, 3]. The algorithm will divide the array repeatedly into halves to prepare for the merging phase.",
      splits: [[2, 1, 7, 6, 9, 5, 3]],
      highlight: [],
    },
    {
      description: "Splitting into [2, 1, 7] and [6, 9, 5, 3]",
      explanation:"Split the array as evenly as possible into left and right subarrays.",
      splits: [
        [2, 1, 7],
        [6, 9, 5, 3],
      ],
      highlight: [0, 1],
    },
    {
      description: "[2, 1, 7] split into [2] and [1, 7] while [6, 9, 5, 3] untouched",
      explanation: "Split the array as evenly as possible into left and right subarrays.",
      splits: [[2], [1, 7], [6, 9, 5, 3]],
      highlight: [0, 1],
    },
    {
      description: "[6, 9, 5, 3] split into [6, 9] and [5, 3]",
      explanation: "Split the array as evenly as possible into left and right subarrays.",
      splits: [[2], [1, 7], [6, 9], [5, 3]],
      highlight: [2, 3],
    },
    {
      description: "[1, 7] split into [1] and [7]",
      explanation: "Split the array as evenly as possible into left and right subarrays.",
      splits: [[2], [1], [7], [6, 9], [5, 3]],
      highlight: [1, 2],
    },
    {
      description: "[6, 9] split into [6] and [9]",
      explanation: "Split the array as evenly as possible into left and right subarrays.",
      splits: [[2], [1], [7], [6], [9], [5, 3]],
      highlight: [3, 4],
    },
    {
      description: "[5, 3] split into [5] and [3]",
      explanation: "Split the array as evenly as possible into left and right subarrays.",
      splits: [[2], [1], [7], [6], [9], [5], [3]],
      highlight: [5, 6],
    },
    {
      description: "The array has been fully divided into single elements. The merging process begins from this point!",
      explanation: "",
      splits: [[2], [1], [7], [6], [9], [5], [3]], 
      highlight: [], // No specific highlight since it's the final state
    },
    {
      description: "Compare 2 and 1.",
      explanation: "We compare the two elements to determine their order.",
      splits: [[null, null], [7], [6], [9], [5], [3]],
      highlight: [0],
      reference: [[2], [1], [7], [6], [9], [5], [3]],
    },
    {
      description: "2 is greater than 1, so 1 comes first.",
      explanation: "We swap the elements to sort them correctly.",
      splits: [[1, null], [6], [9], [5], [3]],
      highlight: [0],
      reference: [[2], [1], [7], [6], [9], [5], [3]],
    },
    {
      description: "Place 2 after 1.",
      explanation: "The pair [2] and [1] is now sorted and merged to form [1,2].",
      splits: [[1, 2], [7], [6], [9], [5], [3]],
      highlight: [0],
      reference: [[2], [1], [7], [6], [9], [5], [3]],
    },
    {
      description: "Compare 7 and 6.",
      explanation: "We compare the two elements to determine their order.",
      splits: [[1, 2], [null, null], [9], [5], [3]],
      highlight: [1],
      reference: [[1, 2], [7], [6], [9], [5], [3]],
    },
    {
      description: "7 is greater than 6, so 6 comes first.",
      explanation: "We swap the elements to sort them correctly.",
      splits: [[1, 2], [6, null], [9], [5], [3]],
      highlight: [1],
      reference: [[1, 2], [7], [6], [9], [5], [3]],
    },
    {
      description: "Place 7 after 6.",
      explanation: "The pair [7] and [6] is now sorted and merged to form [6, 7].",
      splits: [[1, 2], [6, 7], [9], [5], [3]],
      highlight: [1],
      reference: [[1, 2], [7], [6], [9], [5], [3]],
    },
    {
      description: "Compare 9 and 5.",
      explanation: "We compare the two elements to determine their order.",
      splits: [[1, 2], [6, 7], [null, null], [3]],
      highlight: [2],
      reference: [[1, 2], [6, 7], [9], [5], [3]],
    },
    {
      description: "9 is greater than 5, so 5 comes first.",
      explanation: "We swap the elements to sort them correctly.",
      splits: [[1, 2], [6, 7], [5, null], [3]],
      highlight: [2],
      reference: [[1, 2], [6, 7], [9], [5], [3]],
    },
    {
      description: "Place 9 after 5.",
      explanation: "The pair [9] and [5] is now sorted and merged to form [5, 9].",
      splits: [[1, 2], [6, 7], [5, 9], [3]],
      highlight: [2],
      reference: [[1, 2], [6, 7], [9], [5], [3]],
    },
    {
      description: "3 is a single element.",
      explanation: "A single element is already sorted.",
      splits: [[1, 2], [6, 7], [5, 9], [3]],
      highlight: [3],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "Comparing [1, 2] and [6, 7].",
      explanation: "We compare the two subarrays to determine their order.",
      splits: [[null, null, null, null], [5, 9], [3]],
      highlight: [0],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "1 is smaller than 6, so 1 is placed first.",
      explanation: "Taking the smallest element from the left subarray.",
      splits: [[1, null, null, null], [5, 9], [3]],
      highlight: [0],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "2 is smaller than 6, so 2 is placed next.",
      explanation: "Taking the next smallest element from the left subarray.",
      splits: [[1, 2, null, null], [5, 9], [3]],
      highlight: [0],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "Add [6,7] to the array as it is already sorted.",
      explanation: "",
      splits: [[1, 2, 6, 7], [5, 9], [3]],
      highlight: [0],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "Merged [1, 2] and [6, 7] into a sorted subarray.",
      explanation: "The subarrays [1 ,2] and [6, 7] are sorted and merged to form [1, 2, 6, 7]",
      splits: [[1, 2, 6, 7], [5, 9], [3]],
      highlight: [0],
      reference: [[1, 2], [6, 7], [5, 9], [3]],
    },
    {
      description: "Merging [5,9] and [3]",
      explanation: "Taking the smallest element from the left subarray.",
      splits: [[1, 2, 6, 7], [null, null, null]], 
      highlight: [1],
      reference: [[1, 2, 6, 7], [5, 9], [3]],
    },
    {
      description: "Comparing 3 and 5.",
      explanation: "3 is smaller than 5, so 3 is placed first.",
      splits: [[1, 2, 6, 7], [3, null, null]], 
      highlight: [1],
      reference: [[1, 2, 6, 7], [5, 9], [3]],
    },
    {
      description: "Add [5, 9] to current subarray as it is already sorted",
      explanation: "",
      splits: [[1, 2, 6, 7], [3, 5, 9]],
      highlight: [1],
      reference: [[1, 2, 6, 7], [5, 9], [3]],
    },
    {
      description: "[5,9] and [3] have sorted and merged to form [3,5,9]",
      explanation: "",
      splits: [[1, 2, 6, 7], [3, 5, 9]],
      highlight: [1],
      reference: [[1, 2, 6, 7], [5, 9], [3]],
    },
    {
      description: "Comparing [1, 2, 6, 7] and [3,5,9].",
      explanation: "Taking the smallest elements from the left subarray and comparing them with those in the right subarray.",
      splits: [[null, null, null,null, null,null, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 1 and 3.",
      explanation: "1 is smaller than 3, so 1 is placed in the target array.",
      splits: [[1, null, null, null, null, null, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 2 and 3.",
      explanation: "2 is smaller than 3, so 2 is placed in the target array.",
      splits: [[1, 2, null, null, null, null, null]],
      highlight: [0],
      reference:[[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 6 and 3.",
      explanation: "3 is smaller than 6, so 3 is placed in the target array.",
      splits: [[1, 2, 3, null, null, null, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 6 and 5.",
      explanation: "5 is smaller than 6, so 5 is placed in the target array.",
      splits: [[1, 2, 3, 5, null, null, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 6 and 9.",
      explanation: "6 is smaller than 9, so 6 is placed in the target array.",
      splits: [[1, 2, 3, 5, 6, null, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Comparing 7 and 9.",
      explanation: "7 is smaller than 9, so 7 is placed in the target array.",
      splits: [[1, 2, 3, 5, 6, 7, null]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Only 9 remains.",
      explanation: "Since only 9 remains, it is placed in the target array.",
      splits: [[1, 2, 3, 5, 6, 7, 9]],
      highlight: [0],
      reference: [[1, 2, 6, 7], [3, 5, 9]],
    },
    {
      description: "Final merge completed.",
      explanation: "Merge sort is complete. The array is now fully sorted.",
      splits: [[1, 2, 3, 5, 6, 7, 9]],
      highlight: [0],
    },
  ]


  // export const = 
  export const MERGE_SORT_STEPS_1 = [
    {
      description: "Comparing 2 and 1 so we can sort",
      explanation: "",
      splits: [[null], [null], [7], [6], [9], [5], [3]],
      float: [2, 1],
      highlight: [0, 1],
    },
    {
      description: "2 is greater than 1",
      explanation: "So one is put first",
      splits: [[1], [null], [7], [6], [9], [5], [3]],
      float: [1, 2],
      highlight: [0, 1],
    },
    {
      description: "Comparing 2 with 1.",
      explanation: "and then two",
      splits: [[1], [2], [7], [6], [9], [5], [3]],
      float: [1, 2],
      highlight: [0, 1],
    },
    {
      description: "Merging 1 and 2 into place.",
      explanation: "The pair is now sorted and merged.",
      splits: [[1, 2], [7], [6], [9], [5], [3]],
      float: [],
      highlight: [0],
    },
    {
      description: "Floating 7 and 6 for comparison.",
      explanation: "Extract the two elements for direct comparison.",
      splits: [[1, 2], [null], [null], [9], [5], [3]],
      float: [7, 6],
      highlight: [1, 2],
    },
    {
      description: "Comparing 7 with 6.",
      explanation: "7 is greater than 6, so they are swapped.",
      splits: [[1, 2], [null], [null], [9], [5], [3]],
      float: [6, 7],
      highlight: [1, 2],
    },
    {
      description: "Merging 6 and 7 into place.",
      explanation: "The pair is now sorted and merged.",
      splits: [[1, 2], [6, 7], [9], [5], [3]],
      float: [],
      highlight: [1],
    },

    {
      description: "Floating 9 and 5 for comparison.",
      explanation: "Extract the two elements for direct comparison.",
      splits: [[1, 2], [6, 7], [null], [null], [3]],
      float: [9, 5],
      highlight: [2, 3],
    },
    {
      description: "Comparing 9 with 5.",
      explanation: "9 is greater than 5, so they are swapped.",
      splits: [[1, 2], [6, 7], [null], [null], [3]],
      float: [5, 9],
      highlight: [2, 3],
    },
    {
      description: "Merging 5 and 9 into place.",
      explanation: "The pair is now sorted and merged.",
      splits: [[1, 2], [6, 7], [5, 9], [3]],
      float: [],
      highlight: [2],
    },
    {
      description: "Floating 3 as a single element.",
      explanation: "No comparison needed",
      splits: [[1, 2], [6, 7], [5, 9], [3]],
      float: [3],
      highlight: [3],
    },
    {
      description: "Floating [1, 2] and [6, 7] for merging.",
      explanation: "We now merge the sorted pairs.",
      splits: [[null, null, null, null], [5, 9], [3]],
      float: [[1, 2], [6, 7]],
      highlight: [0],
    },
    {
      description: "Merging 1, 2 with 6, 7.",
      explanation: "Elements are sorted together.",
      splits: [[1, 2, 6, 7], [5, 9], [3]],
      float: [],
      highlight: [0],
    },
    {
      description: "Floating [1, 2, 6, 7] and [3, 5, 9] for merging.",
      explanation: "We now merge the final pairs.",
      splits: [[null, null, null, null, null, null, null]],
      float: [[1, 2, 6, 7], [3, 5, 9]],
      highlight: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      description: "Final merge into sorted array.",
      explanation: "The array is now fully sorted.",
      splits: [[1, 2, 3, 5, 6, 7, 9]],
      float: [],
      highlight: [0, 1, 2, 3, 4, 5, 6],
    },
  ];