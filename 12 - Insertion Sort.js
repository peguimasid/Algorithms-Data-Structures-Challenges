function insertionSort(array, comparator) {
  for (let i = 0; i < array.length; i++) {
    const currentVal = array[i];

    if (comparator) {
      for (var j = i - 1; j >= 0 && comparator(array[j], currentVal) > 0; j--) {
        array[j + 1] = array[j];
      }
    } else {
      for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
        array[j + 1] = array[j];
      }
    }

    array[j + 1] = currentVal;
  }

  return array;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
