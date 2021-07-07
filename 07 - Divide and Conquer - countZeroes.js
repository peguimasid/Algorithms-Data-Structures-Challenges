function countZeroes(array) {
  let left = 0;
  let right = array.length;
  let middle = 0;

  while (left < right) {
    middle = Math.floor((left + right) / 2);

    array[middle] === 1 ? (left = middle + 1) : (right = middle);
  }

  return array.length - left;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
