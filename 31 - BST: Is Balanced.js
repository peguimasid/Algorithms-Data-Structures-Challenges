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
    // only accept numbers....watch out since NaN is typeof number!
    if (typeof value === 'number' && !isNaN(value)) {
      // if there is nothing in the tree, start it off with a new node!
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        // current variable used for traversal, just like linked lists!
        var current = this.root;
        // keep looping till we get to the correct spot;
        while (true) {
          if (value < current.value) {
            // if there is nothing on the left
            if (current.left === null) {
              // make a new node and get out
              current.left = new Node(value);
              return this;
            }
            // otherwise, keep moving on!
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            // if there is nothing on the right
            if (current.right === null) {
              // make a new node and get out
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
          // otherwise it must be a duplicate so let's get out of here
          else {
            return 'duplicate!';
          }
        }
      }
    } else return 'Please insert a number';
  }
  countDepth(node) {
    if (!node) return 0;
    let result = 1;

    if (node.left && node.right) {
      result += Math.max(
        this.countDepth(node.left),
        this.countDepth(node.right)
      );
    } else {
      if (node.left) result += this.countDepth(node.left);
      if (node.right) result += this.countDepth(node.right);
    }

    return result;
  }

  isBalanced() {
    let leftDepth = this.countDepth(this.root.left);
    let rightDepth = this.countDepth(this.root.right);

    return Math.abs(leftDepth - rightDepth) > 1 ? false : true;
  }
}

const bst = new BinarySearchTree();

// bst.insert(5).insert(6).insert(7);
bst.insert(15).insert(20).insert(10).insert(12).insert(9);

// console.log(bst);
console.log(bst.isBalanced());
