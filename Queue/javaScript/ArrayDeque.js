class ArrayDeque {
  constructor() {
    this.items = [];
  }

  // Add element to front
  addFirst(value) {
    this.items.unshift(value);
  }

  // Add element to back
  addLast(value) {
    this.items.push(value);
  }

  // Remove element from front
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("Deque Underflow: Cannot remove from empty deque");
    }
    return this.items.shift();
  }

  // Remove element from back
  removeLast() {
    if (this.isEmpty()) {
      throw new Error("Deque Underflow: Cannot remove from empty deque");
    }
    return this.items.pop();
  }

  // View front element
  peekFirst() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    return this.items[0];
  }

  // View last element
  peekLast() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return size
  size() {
    return this.items.length;
  }

  // Clear deque
  clear() {
    this.items = [];
  }

  // Convert deque to string
  toString() {
    return this.items.join(" <-> ");
  }

  // Print deque
  print() {
    console.log(this.toString());
  }
}

const dq = new ArrayDeque();

dq.addLast(10);
dq.addLast(20);
dq.addFirst(5);
dq.addLast(30);

dq.print(); // 5 <-> 10 <-> 20 <-> 30

console.log(dq.removeFirst()); // 5
console.log(dq.removeLast()); // 30

dq.print(); // 10 <-> 20

console.log(dq.peekFirst()); // 10
console.log(dq.peekLast()); // 20

console.log(dq.size()); // 2
