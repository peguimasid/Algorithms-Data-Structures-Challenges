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
  extractMax() {
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;

    const removedValue = this.values.pop();
    this.sinkDown();

    return removedValue;
  }
  sinkDown() {
    let parentIndex = 0;

    while (true) {
      let leftChild = this.values[2 * parentIndex + 1] || null;
      let rightChild = this.values[2 * parentIndex + 2] || null;

      let largestChild = Math.max(leftChild, rightChild);

      let largestChildIndex =
        largestChild === leftChild ? 2 * parentIndex + 1 : 2 * parentIndex + 2;

      if (largestChild < this.values[parentIndex]) break;

      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[largestChildIndex];
      this.values[largestChildIndex] = temp;

      parentIndex = largestChildIndex;
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

bh.extractMax();
console.log(bh);
