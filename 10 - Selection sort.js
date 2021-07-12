function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array, comparator) {
  for (let i = 0; i < array.length; i++) {
    let smallValue = array[i];
    let smallValueIndex = i;

    for (let j = i; j < array.length; j++) {
      if (comparator && comparator(smallValue, array[j]) > 0) {
        smallValue = array[j];
        smallValueIndex = j;
      }
      if (array[j] < smallValue) {
        smallValue = array[j];
        smallValueIndex = j;
      }
    }

    swap(i, smallValueIndex, array);
  }

  return array;
}

console.log(selectionSort([7, 4, 6, 1, 3, 2, 9, 8]));
