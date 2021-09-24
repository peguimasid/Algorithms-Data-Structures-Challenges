class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let index = this.values.length - 1;

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent > this.values[index] || parentIndex < 0) break;

      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;

      index = parentIndex;
    }
  }
}

const bh = new MaxBinaryHeap();

bh.insert(1);
bh.insert(2);
bh.insert(3);
bh.insert(4);
bh.insert(5);
bh.insert(6);

console.log(bh);
