function sortedFrequency(array, n) {
  if (!array.includes(n)) return -1;
  let left = 0;
  let right = array.length;

  while (array[left] !== n) {
    left++;
  }
  while (array[right] !== n) {
    right--;
  }

  return right - left + 1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
