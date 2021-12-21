function WeightedGraph() {
  Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);

WeightedGraph.prototype.addEdge = function (vertexOne, vertexTwo, weight) {
  this.adjacencyList[vertexOne].push({ node: vertexTwo, weight });
  this.adjacencyList[vertexTwo].push({ node: vertexOne, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, finish) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};

  let smallest;

  for (const vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      let path = [];
      let current = finish;

      while (current) {
        path.unshift(current);
        current = previous[current];
      }

      return path;
    }
    for (const neighbor of this.adjacencyList[smallest]) {
      let candidate = distances[smallest] + neighbor.weight;

      if (candidate < distances[neighbor.node]) {
        distances[neighbor.node] = candidate;
        previous[neighbor.node] = smallest;
        nodes.enqueue(neighbor.node, candidate);
      }
    }
  }
};

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach((list) => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);
g.addEdge('Z', 'Q', 2);
g.addEdge('C', 'G', 4);
g.addEdge('D', 'Q', 8);
g.addEdge('E', 'H', 1);
g.addEdge('H', 'Q', 3);
g.addEdge('Q', 'C', 6);
g.addEdge('G', 'Q', 9);

// console.log(g);
console.log(g.Dijkstra('A', 'D'));
