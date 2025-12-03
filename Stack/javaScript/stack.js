class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow : cannot pop from empty stack");
    }

    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join("->"));
  }
  toString() {
    return this.items.join("->");
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log("" + stack);
console.log(String(stack));
console.log(stack.toString());
