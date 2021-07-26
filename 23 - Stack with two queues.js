class Stack {
  constructor() {
    this.queue = new Queue();
  }
  push(value) {
    let queueOne = this.queue;
    let queueTwo = new Queue();

    queueTwo.enqueue(value);

    while (queueOne.size) {
      queueTwo.enqueue(queueOne.dequeue());
    }
    this.queue = queueTwo;
    return this;
  }
  pop() {
    return this.queue.dequeue();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let s = new Stack();

console.log(s.push(10).push(20));
