class ArrayQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow: Cannot dequeue from empty queue");
    }
    // console.log(this.items);
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join("<-");
  }
}

const queue = new ArrayQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(30);
queue.dequeue();

console.log(queue.toString());
