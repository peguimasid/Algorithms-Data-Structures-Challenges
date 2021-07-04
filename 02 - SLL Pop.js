class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
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
  pop() {
    if (!this.length) return undefined;
    let removedNode = null;

    if (this.length === 1) {
      removedNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      let prev = null;
      let curr = this.head;

      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }

      this.tail = prev;
      this.tail.next = null;
      removedNode = curr;
    }

    this.length--;
    return removedNode;
  }
}
