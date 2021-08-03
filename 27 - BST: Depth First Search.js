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

  depthFirstSearchPreOrder() {
    let result = [];

    function walkThrough(node) {
      result.push(node.value);
      if (node.left) walkThrough(node.left);
      if (node.right) walkThrough(node.right);
    }

    walkThrough(this.root);

    return result;
  }

  depthFirstSearchInOrder() {
    let result = [];

    function walkThrough(node) {
      if (node.left) walkThrough(node.left);
      result.push(node.value);
      if (node.right) walkThrough(node.right);
    }

    walkThrough(this.root);

    return result;
  }
  depthFirstSearchPostOrder() {
    let result = [];

    function walkThrough(node) {
      if (node.left) walkThrough(node.left);
      if (node.right) walkThrough(node.right);
      result.push(node.value);
    }

    walkThrough(this.root);

    return result;
  }
}

const bst = new BinarySearchTree();

bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

// console.log(bst.depthFirstSearchPreOrder());
// console.log(bst.depthFirstSearchInOrder());
console.log(bst.depthFirstSearchPostOrder());
