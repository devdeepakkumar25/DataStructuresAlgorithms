// let matrix = Array.from({ length: 10 }, () => Array(10).fill(0));

// console.log(matrix);

function createAdjMatrix(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  return matrix;
}

function addEdgeMatrix(matrix, u, v) {
  matrix[u][v] = 1;
  matrix[v][u] = 1;
}

function getNeighboursMatrix(matrix, v) {
  let neigh = [];

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[v][i] === 1) neigh.push(i);
  }

  return neigh;
}

function printMatrix(matrix) {
  console.log("Adjacency Matrix: ");
  matrix.forEach((row) => console.log(row.join(" ")));
}

let n = 5;

let matrix = createAdjMatrix(n);

addEdgeMatrix(matrix, 0, 1);
addEdgeMatrix(matrix, 0, 2);
addEdgeMatrix(matrix, 1, 3);
addEdgeMatrix(matrix, 2, 4);

printMatrix(matrix);

function createAdjList(n) {
  return Array.from({ length: n }, () => []);
}

function addEdgeList(list, u, v) {
  list[u].push(v);
  list[v].push(u);
}

function getNeighboursList(list, u) {
  return list[v];
}

function printList(list) {
  console.log("Adjacency List: ");
  list.forEach((neigh, i) => console.log(i + " -> " + neigh.join(", ")));
}

let list = createAdjList(n);
addEdgeList(list, 0, 1);
addEdgeList(list, 0, 2);
addEdgeList(list, 1, 3);
addEdgeList(list, 2, 4);

printList(list);

function bfs(list, start) {
  let visited = new Array(list.length).fill(false);

  let queue = [];

  visited[start] = true;

  queue.push(start);

  console.log("BFS: ");
  while (queue.length > 0) {
    let node = queue.shift();
    process.stdout.write(node + " ");
    for (let nbr of list[node]) {
      if (!visited[nbr]) {
        visited[nbr] = true;
        queue.push(nbr);
      }
    }
  }
  console.log();
}

bfs(list, 1);

function dfs(list, start) {
  let visited = new Array(list.length).fill(false);

  function explore(node) {
    visited[node] = true;
    process.stdout.write(node + " ");

    for (let nbr of list[node]) {
      if (!visited[nbr]) explore(nbr);
    }
  }
  console.log("DFS: ");
  explore(start);
  console.log();
}

dfs(list, 1);
