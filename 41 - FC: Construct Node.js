function constructNote(message, letters) {
  if (!letters.length) return false;

  const messageFrequencyCounter = message.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  const lettersFrequencyCounter = letters.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  for (const key in messageFrequencyCounter) {
    if (messageFrequencyCounter[key] > lettersFrequencyCounter[key])
      return false;
  }

  return true;
}

console.log(constructNote('aabbcc', 'bcabcaddff'));
