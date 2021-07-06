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
    let newNode = new Node(val);
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
  set(index, newValue) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(newValue);
    if (index === 0) {
      let newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }

    let count = 0;
    let curr = this.head;

    while (count !== index) {
      curr = curr.next;
      count++;
    }
    curr.val = newValue;

    return true;
  }
}

const sll = new SinglyLinkedList();

sll.push(0).push(2).push(3);

sll.set(1, 1);

console.log(sll);
