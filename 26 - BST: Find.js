class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (newNode.value === currentNode) return undefined;

        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }

        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }

    return this;
  }
  find(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return undefined;
        }
      }
      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return undefined;
        }
      }
    }

    return undefined;
  }
}

const bst = new BinarySearchTree();

bst.insert(15).insert(20).insert(10).insert(12);

const foundNode = bst.find(12);

console.log(foundNode);
