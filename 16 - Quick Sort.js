const swap = (idx1, idx2, array) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

function pivot(array, comparator, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    const currentValue = array[i];
    if (
      (comparator && comparator(pivot, currentValue) > 0) ||
      (!comparator && pivot > currentValue)
    ) {
      pivotIndex++;
      swap(i, pivotIndex, array);
    }
  }

  swap(pivotIndex, start, array);
  return pivotIndex;
}

function quickSort(array, comparator, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, comparator, left, right);

    quickSort(array, comparator, left, pivotIndex - 1);
    quickSort(array, comparator, pivotIndex + 1, right);
  }

  return array;
}

console.log(quickSort([5, 4, 9, 10, 2, 20, 8, 7, 3]));
