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
}

const sll = new SinglyLinkedList();

sll.push(5).push(10).push(15).push(15);

console.log(sll.get(0));
