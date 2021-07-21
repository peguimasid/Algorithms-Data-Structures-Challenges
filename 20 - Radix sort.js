function getDigit(num, i) {
  return Number(String(num).split('').reverse()[i]) || 0;
}

function digitCount(num) {
  return Number(String(num).length);
}

function mostDigits(nums) {
  if (!nums.length) return 0;
  return Math.max(...nums.map((num) => digitCount(num)));
}

function radixSort(nums) {
  let bigDigitLength = mostDigits(nums);

  for (let k = 0; k < bigDigitLength; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];
      const digit = getDigit(currentNumber, k);
      buckets[digit].push(currentNumber);
    }

    nums = buckets.flat(1);
  }

  return nums;
}

console.log(radixSort([8, 6, 1, 12]));
