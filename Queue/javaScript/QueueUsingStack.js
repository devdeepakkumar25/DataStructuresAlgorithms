class QueueUsingStacks {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  enqueue(value) {
    while (this.popStack.length > 0) {
      this.pushStack.push(this.popStack.pop());
    }

    this.pushStack.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack[this.popStack.length - 1];
  }

  isEmpty() {
    return this.pushStack.length == 0 && this.popStack.length === 0;
  }

  size() {
    return this.pushStack.length + this.popStack.length;
  }
}
const q = new QueueUsingStacks();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); // 10
console.log(q.peek());    // 20
console.log(q.size());    // 2

