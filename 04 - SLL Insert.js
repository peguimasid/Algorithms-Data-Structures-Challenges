class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.next = null;
    this.length = 0;
  }
  get(index) {
    if (!this.length || index >= this.length || index < 0) return null;

    let count = 0;
    let foundNode = this.head;

    while (count !== index) {
      foundNode = foundNode.next;
      count++;
    }

    return foundNode;
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
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }

    let previousNode = this.get(index - 1);
    let newNode = new Node(val);

    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;

    return true;
  }
}

const sll = new SinglyLinkedList();

sll.push(5).push(10).push(15).push(20);

sll.insert(2, 12);
sll.insert(100, 12);
sll.insert(5, 25);

console.log(sll.head.next.next.next.next);
