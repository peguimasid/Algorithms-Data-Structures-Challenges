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

console.log(merge([1, 3, 4, 5], [2, 4, 6, 8]));
