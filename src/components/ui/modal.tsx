import React, { useState } from 'react';
import "../../css/modal.css"

interface ModalProps {
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {
  const [language, setLanguage] = useState('javascript'); // Default language is JavaScript

  const getCodeForLanguage = (lang: string) => {
    switch (lang) {
      case 'python':
        return `def merge_sort(array):
  if len(array) <= 1:
      return array
  mid = len(array) // 2
  left = merge_sort(array[:mid])
  right = merge_sort(array[mid:])
  return merge(left, right)

def merge(left, right):
  result = []
  while left and right:
      if left[0] < right[0]:
          result.append(left.pop(0))
      else:
          result.append(right.pop(0))
  result += left
  result += right
  return result`;
      case 'java':
        return `public class MergeSort {
  public static int[] mergeSort(int[] array) {
    if (array.length <= 1) {
      return array;
    }
    int mid = array.length / 2;
    int[] left = mergeSort(Arrays.copyOfRange(array, 0, mid));
    int[] right = mergeSort(Arrays.copyOfRange(array, mid, array.length));
    return merge(left, right);
  }

  private static int[] merge(int[] left, int[] right) {
    int[] result = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result[k++] = left[i++];
      } else {
        result[k++] = right[j++];
      }
    }
    while (i < left.length) {
      result[k++] = left[i++];
    }
    while (j < right.length) {
      result[k++] = right[j++];
    }
    return result;
  }
}`;
      case 'javascript':
      default:
        return `function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`;
    }
  };

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Merge Sort Code</h2>
        
        {/* Language Switch Buttons */}
        <div className="language-buttons">
          <button onClick={() => setLanguage('javascript')}>JavaScript</button>
          <button onClick={() => setLanguage('python')}>Python</button>
          <button onClick={() => setLanguage('java')}>Java</button>
        </div>

        <pre>{getCodeForLanguage(language)}</pre>

        <button onClick={toggleModal} className="close-modal-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
