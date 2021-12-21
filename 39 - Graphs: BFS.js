class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  breadthFirstSearch(start) {
    const list = this.adjacencyList;
    let result = [];
    let visitedNodes = [];
    let queue = [start];

    while (queue.length) {
      const currentNode = queue.shift();

      if (!visitedNodes.includes(currentNode)) {
        result.push(currentNode);
        visitedNodes.push(currentNode);

        const currentNodeEdges = list[currentNode];

        for (let i = 0; i < currentNodeEdges.length; i++) {
          if (!visitedNodes.includes(currentNodeEdges[i])) {
            queue.push(currentNodeEdges[i]);
          }
        }
      }
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('S');
g.addVertex('P');
g.addVertex('U');
g.addVertex('X');
g.addVertex('Q');
g.addVertex('Y');
g.addVertex('V');
g.addVertex('R');
g.addVertex('W');
g.addVertex('T');

g.addEdge('S', 'P');
g.addEdge('S', 'U');

g.addEdge('P', 'X');
g.addEdge('U', 'X');

g.addEdge('P', 'Q');
g.addEdge('U', 'V');

g.addEdge('X', 'Q');
g.addEdge('X', 'Y');
g.addEdge('X', 'V');

g.addEdge('Q', 'R');
g.addEdge('Y', 'R');

g.addEdge('Y', 'W');
g.addEdge('V', 'W');

g.addEdge('R', 'T');
g.addEdge('W', 'T');

console.log(g);

console.log(g.breadthFirstSearch('S'));
