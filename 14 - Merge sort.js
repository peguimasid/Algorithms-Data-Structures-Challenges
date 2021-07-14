function defaultComparator(a, b) {
  return a - b;
}

function merge(array1, array2, comparator) {
  if (!comparator) comparator = defaultComparator;

  let result = [];

  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (comparator && comparator(array2[j], array1[i]) > 0) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

function mergeSort(array, comparator) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle), comparator);
  let right = mergeSort(array.slice(middle), comparator);

  return merge(left, right, comparator);
}

console.log(mergeSort([10, 4, 5, 7, 9, 8, 2, 3]));
