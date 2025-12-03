class PriorityQueue {
  constructor(size = 5) {
    this.items = new Array(size);
    this.count = 0;
    this.size = size;
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }

  shiftItemsToInsert(item) {
    let i;
    // Shift elements to maintain sorted order
    for (i = this.count - 1; i >= 0; i--) {
      if (this.items[i] > item) {
        this.items[i + 1] = this.items[i];
      } else {
        break;
      }
    }
    return i + 1;
  }

  add(item) {
    if (this.isFull()) {
      throw new Error("Priority Queue Overflow");
    }

    // let i;
    // // Shift elements to maintain sorted order
    // for (i = this.count - 1; i >= 0; i--) {
    //   if (this.items[i] > item) {
    //     this.items[i + 1] = this.items[i];
    //   } else {
    //     break;
    //   }
    // }
    let i = this.shiftItemsToInsert(item);

    this.items[i] = item;
    this.count++;
  }

  // Remove highest priority
  remove() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue Underflow");
    }

    // let item = this.items[count];

    // // Shift everything left by 1
    // for (let i = 0; i < this.count - 1; i++) {
    //   this.items[i] = this.items[i + 1];
    // }

    // this.count--;
    // return item;

    return this.items[--this.count];
  }

  //  View highest priority (smallest)
  peek() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue is empty");
    }
    return this.items[0];
  }

  //  Total items
  sizeOfQueue() {
    return this.count;
  }

  //  Clear queue
  clear() {
    this.items = new Array(this.size);
    this.count = 0;
  }

  // Print only valid elements
  toString() {
    return this.items.slice(0, this.count).join(", ");
  }
}

const pq = new PriorityQueue(10);

pq.add(5);
pq.add(3);
pq.add(6);
pq.add(1);
pq.add(4);
pq.add(5);

console.log(pq.toString());

while (!pq.isEmpty()) {
  console.log(pq.remove());
}
