function getDigit(num, i) {
  return Number(String(num).split('').reverse()[i]) || 0;
}

console.log(getDigit(8987, 1));
