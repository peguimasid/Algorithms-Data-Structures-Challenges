function findAllDuplicates(array) {
  const frequencyCounter = array.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  let result = [];

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] === 2) result.push(Number(key));
  }

  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
