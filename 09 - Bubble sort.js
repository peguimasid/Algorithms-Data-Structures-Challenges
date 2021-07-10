function bubbleSort(array, comparator) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator && comparator(array[j], array[j + 1]) > 0) {
        swap(j, j + 1, array);
      } else {
        if (array[j] > array[j + 1]) swap(j, j + 1, array);
      }
    }
  }

  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([3, 2, 9, 1, 7, 5, 8, 4, 6]));
