function findPair(array, number) {
  let left = 0;
  let right = array.length - 1;

  while (left < array.length) {
    if (
      array[left] - array[right] === number ||
      array[right] - array[left] === number
    ) {
      return true;
    }

    if (left === right) {
      right = array.length - 1;
      left++;
    } else {
      right--;
    }
  }

  return false;
}
console.log(findPair([0, 1, 3, 4, 6], -2));
// console.log(findPair([1, 3, 4, 5], -2));
