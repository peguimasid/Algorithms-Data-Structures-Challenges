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

  remove(val) {
    let delNode;
    const del = (root, val) => {
      if (root === null) return root;
      else if (val > root.value) root.right = del(root.right, val);
      else if (val < root.value) root.left = del(root.left, val);
      else {
        if (delNode === undefined) delNode = root.value;
        if (root.left === null && root.right === null) {
          root = null;
        } else if (root.left === null) {
          root = root.right;
        } else if (root.right === null) {
          root = root.left;
        } else {
          let temp = findMin(root.right); // assign a root to min in a right subtree
          root.value = temp.value;
          root.right = del(root.right, root.value);
        }
      }
      return root;
    };
    const findMin = (root) => {
      if (root === null) return root;
      if (root.left) return findMin(root.left);
      return root;
    };

    this.root = del(this.root, val);
    return delNode;
  }
}

const bst = new BinarySearchTree();

bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

bst.remove(15);

console.log(bst.root);
