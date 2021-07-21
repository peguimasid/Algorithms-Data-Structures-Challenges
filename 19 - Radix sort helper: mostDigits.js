function digitCount(num) {
  return Number(String(num).length);
}

function mostDigits(nums) {
  if (!nums.length) return 0;
  return Math.max(...nums.map((num) => digitCount(num)));
}

console.log(mostDigits([]));
