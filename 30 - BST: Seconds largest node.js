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
  DFS() {
    let result = [];

    function walkThrough(aNode) {
      result.push(aNode.value);
      if (aNode.right) walkThrough(aNode.right);
    }

    if (this.root) walkThrough(this.root);

    return result;
  }

  findSecondLargest() {
    const bigSizesArray = this.DFS();

    const firstLargestValue = Math.max(...bigSizesArray);
    const secondLargestValue = Math.min(
      Math.max(
        ...bigSizesArray.filter((number) => number !== firstLargestValue)
      ),
      firstLargestValue
    );

    return secondLargestValue >= 0 ? secondLargestValue : undefined;
  }
}

const bst = new BinarySearchTree();

bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

console.log(bst.findSecondLargest());
