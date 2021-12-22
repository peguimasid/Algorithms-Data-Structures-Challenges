function coinChange(coins, value) {
  let ways = Array(value + 1).fill(0);

  ways[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = 0; j < ways.length; j++) {
      if (coin <= j) {
        ways[j] = ways[j - coin] + ways[j];
      }
    }
  }

  return ways[value];
}

console.log(coinChange([1, 5, 10, 25], 100));
