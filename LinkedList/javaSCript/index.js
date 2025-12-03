class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  set(node) {
    this.vale = this.value;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  addLast(item) {
    let node = new Node(item);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  addFirst(item) {
    let node = new Node(item);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  indexOf(item) {
    let index = 0;
    let current = this.first;
    while (current !== null) {
      if (current.value === item) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  contains(item) {
    return this.indexOf(item) !== -1;
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("No such Element, List is empty");
    }

    if (this.first === this.last) {
      this.first = this.last = null;
      this.size--;
      return;
    }

    let second = this.first.next;
    this.first.next = null;
    this.first = second;
    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) {
      throw new Error("No Such Element");
    }

    if (this.first === this.last) {
      this.first = this.last = null;
      this.size--;
      return;
    }

    let previous = this.getPrevious(this.last);
    this.last = previous;
    this.last.next = null;
    this.size--;
  }

  getPrevious(node) {
    let current = this.first;
    while (current !== null) {
      if (current.next === node) return current;
      current = current.next;
    }
    return null;
  }

  getSize() {
    return this.size;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.addFirst(value);
      return;
    }
    if (index === this.size) {
      this.addLast(value);
      return;
    }
    let current = this.first;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    const node = new Node(value);
    previous.next = node;
    node.next = current;
    this.size++;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("invalid index");
    }
    if (index === 0) {
      this.removeFirst();
      return;
    }
    if (index === this.size - 1) {
      this.removeLast();
      return;
    }
    let current = this.first;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = current.next;
    current.next = null;
    this.size--;
  }

  toArray() {
    let array = new Array(this.size);
    let current = this.first;
    let index = 0;

    while (current !== null) {
      array[index++] = current.value;
      current = current.next;
    }
    return array;
  }

  reverse() {
    if (this.isEmpty()) return;

    let previous = this.first;
    let current = this.first.next;

    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.last = this.first;
    this.last.next = null;
    this.first = previous;
  }

  reverseLL(node) {
    if (node === null || node.next === null) {
      return node;
    }
    let head = this.reverseLL(node.next);
    node.next.next = node;
    node.next = null;
    return head;
  }
  reverseRec() {
    if (this.isEmpty()) return;
    this.last = this.first;

    this.first = this.reverseLL(this.first);
  }

  getKthFromTheEnd(k) {
    if (this.isEmpty()) {
      return;
    }
    let a = this.first;
    let b = this.first;

    for (let i = 0; i < k - 1; i++) {
      b = b.next;
      if (b === null) {
        throw new Error("Index is out of range ");
      }
    }
    while (b != this.last) {
      a = a.next;
      b = b.next;
    }
    return a.value;
  }

  getMiddle() {
    if (this.isEmpty()) return;

    let slow = this.first;

    let fast = this.first;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
  printLinkedList() {
    let head = this.first;
    while (head !== null) {
      console.log(head.value);
      head = head.next;
    }
  }

  isEmpty() {
    return this.first === null;
  }
}

let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addFirst(5);
list.printLinkedList();

console.log(list.indexOf(40));
console.log(list.contains(4));
console.log(list.contains(40));

// list.removeFirst();
// list.removeLast();
list.printLinkedList();
console.log(list.getSize());
console.log(list.toArray().toString());

// list.reverse();
console.log(list.getKthFromTheEnd(2));

console.log(list.getMiddle());

list.insertAt(0, 1);
list.deleteAt(2);
console.log(list.toArray().toString());
