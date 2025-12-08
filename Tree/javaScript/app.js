class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }

  set(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  createTree() {
    let queue = [];
    let state = "root"; // root → left → right → next node
    let currentNode = null;

    console.log("Enter root value: ");

    process.stdin.on("data", (data) => {
      let value = Number(data.toString().trim());

      // Step 1: Create root
      if (state === "root") {
        this.root = new Node(value);
        queue.push(this.root);
        state = "left";
        currentNode = queue.shift();
        console.log(
          "Enter left child of",
          currentNode.data,
          "(-1 for no child):"
        );
        return;
      }

      // Step 2: Left child
      if (state === "left") {
        if (value !== -1) {
          currentNode.left = new Node(value);
          queue.push(currentNode.left);
        }
        state = "right";
        console.log(
          "Enter right child of",
          currentNode.data,
          "(-1 for no child):"
        );
        return;
      }

      // Step 3: Right child
      if (state === "right") {
        if (value !== -1) {
          currentNode.right = new Node(value);
          queue.push(currentNode.right);
        }

        // Move to next node in queue
        if (queue.length === 0) {
          console.log("Tree creation completed!");
          this.preOrder();
          process.exit();
        }

        currentNode = queue.shift();
        state = "left";
        console.log(
          "Enter left child of",
          currentNode.data,
          "(-1 for no child):"
        );
        return;
      }
    });
  }

  preOrder() {
    console.log("Pre Order Traversal Order: ");
    if (this.root === null) return;

    this.preOrderHelper(this.root);
  }

  preOrderHelper(root) {
    if (root !== null) {
      console.log(root.data);
      this.preOrderHelper(root.left);
      this.preOrderHelper(root.right);
    }
  }

  inOrder() {
    console.log("In order Traversal Order");
    if (this.isEmpty()) return;
    this.inOrderHelper(this.root);
  }

  inOrderHelper(root) {
    if (root !== null) {
      this.inOrderHelper(root.left);
      console.log(root.data);
      this.inOrderHelper(root.right);
    }
  }

  postOrder() {
    console.log("Post Order Traversal");

    if (this.isEmpty()) return;

    this.postOrderHelper(this.root);
  }

  postOrderHelper(root) {
    if (root !== null) {
      this.postOrderHelper(root.left);
      this.postOrderHelper(root.right);
      console.log(root.data);
    }
  }

  preOrderItr() {
    console.log("Pre order iterative");
    let root = this.root;

    let stack = [];

    while (root !== null || stack.length > 0) {
      if (root !== null) {
        console.log(root.data);
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        root = root.right;
      }
    }
  }

  inOrderItr() {
    console.log("In order Itr traversal");
    let root = this.root;

    let stack = [];

    while (root !== null || stack.length > 0) {
      if (root !== null) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        console.log(root.data);
        root = root.right;
      }
    }
  }

  postOrderItr() {
    console.log("Post order iterative");
    if (this.root === null) return;

    let root = this.root;

    let stack1 = [];
    let stack2 = [];

    stack1.push(this.root);

    while (stack1.length > 0) {
      let node = stack1.pop();
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
      while (stack2.length > 0) {
        console.log(stack2.pop().data);
      }
    }
  }

  postOrderItr1() {
    console.log("Postorder Iterative Traversal:");

    if (this.root === null) return;

    let stack = [];
    let current = this.root;
    let lastVisited = null;

    while (current !== null || stack.length > 0) {
      // Go left as far as possible
      if (current !== null) {
        stack.push(current);
        current = current.left;
      } else {
        let peekNode = stack[stack.length - 1];

        // If right child exists and we haven't visited it yet
        if (peekNode.right !== null && lastVisited !== peekNode.right) {
          current = peekNode.right;
        } else {
          console.log(peekNode.data);
          lastVisited = stack.pop();
        }
      }
    }
  }

  levelOrder() {
    console.log("Level Order: ");
    if (this.root === null) return;

    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();
      process.stdout.write(current.data + " ");

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    console.log();
  }

  isEmpty() {
    return this.root === null;
  }
}

const tree = new Tree();

let root = new Node(10);

root.left = new Node(20);
root.right = new Node(30);

root.left.left = new Node(40);
root.left.right = new Node(50);

root.right.left = new Node(60);
root.right.right = new Node(70);

tree.root = root;

// tree.createTree();

tree.preOrder();

tree.inOrder();

tree.postOrder();

tree.preOrderItr();

tree.inOrderItr();

tree.postOrderItr();

tree.postOrderItr1();

tree.levelOrder();
