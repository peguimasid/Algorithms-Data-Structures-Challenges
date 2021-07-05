class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  rotate(index) {
    if (index < 0) {
      index = this.length + index;
    }

    if (!index) return;

    let node = this.head;

    while (index) {
      this.head = this.head.next;

      this.tail.next = node;

      this.tail = node;

      node.next = null;

      node = this.head;

      index--;
    }

    return this.head;
  }
}

const sll = new SinglyLinkedList();

sll.push(1).push(2).push(3).push(4).push(5);

console.log(sll.rotate(2)); // 3 -> 4 -> 5 -> 1 -> 2

// 2 -> 3 -> 4 -> 5 -> 1
// 3 -> 4 -> 5 -> 1 -> 2
