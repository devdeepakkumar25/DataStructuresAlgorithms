class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  set(node) {
    this.node = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  createList(arr) {
    this.head = new Node(arr[0]);
    let last = this.head;
    for (let i = 1; i < arr.length; i++) {
      let temp = new Node(arr[i]);
      last.next = temp;
      last = temp;
    }
  }

  display() {
    if (this.isEmpty()) return;
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  displayRec() {
    if (!this.isEmpty()) {
      this.displayRecHelper(this.head);
    }
  }

  displayRecHelper(head) {
    if (head !== null) {
      console.log(head.data);
      this.displayRecHelper(head.next);
    }
  }

  displayRevRec() {
    if (!this.isEmpty()) this.displayRevRecHelper(this.head);
  }
  displayRevRecHelper(head) {
    if (head !== null) {
      this.displayRevRecHelper(head.next);
      console.log(head.data);
    }
  }

  isEmpty() {
    return this.head == null;
  }

  countNode() {
    let count = 0;
    let current = this.head;

    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  recCountNode(head) {
    if (head === null) {
      return 0;
    } else {
      return this.recCountNode(head.next) + 1;
    }
  }

  countNodeRec() {
    if (!this.isEmpty()) return this.recCountNode(this.head);
  }

  sum() {
    let current = this.head;

    let sum = 0;
    while (current != null) {
      sum += current.data;
      current = current.next;
    }
    return sum;
  }

  recSumHelper(head) {
    if (head === null) {
      return 0;
    } else {
      return head.data + this.recSumHelper(head.next);
    }
  }

  recSum() {
    if (!this.isEmpty()) return this.recSumHelper(this.head);
  }

  maxEle() {
    if (this.isEmpty()) return -Infinity;
    let max = -Infinity;

    let current = this.head;

    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }

  recMaxEle() {
    if (!this.isEmpty()) return this.recMaxEleHelper(this.head);
  }
  recMaxEleHelper(head) {
    let x = 0;

    if (head === null) {
      return -Infinity;
    }

    x = this.recMaxEleHelper(head.next);

    return x > head.data ? x : head.data;
    //  else {
    //   x = this.recMaxEleHelper(head.next);
    //   if (x > head.data) {
    //     return x;
    //   } else {
    //     return head.data;
    //   }
    // }
  }

  linearSearch(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data == target) return true;
      current = current.next;
    }
    return false;
  }

  recLinearSearch(head, target) {
    if (head === null) {
      return false;
    }

    if (head.data === target) {
      return true;
    }
    return this.recLinearSearch(head.next, target);
  }

  moveToFront(target) {
    let temp = null;
    let current = this.head;
    while (current != null) {
      if (current.data === target) {
        temp.next = current.next;
        current.next = this.head;
        this.head = current;
      }

      temp = current;
      current = current.next;
    }
  }

  toString() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }

    return arr.join("->");
  }
}

const list = new LinkedList();

let arr = [8, 3, 7, 12, 9];

list.createList(arr);

// list.display();
// list.displayRec();
list.displayRevRec();

console.log("Total Nodes : ", list.countNode());

console.log("Total Nodes Rec : ", list.recCountNode(list.head));
console.log(list.countNodeRec());

console.log("Sum : ", list.sum());

console.log("Rec Sum : ", list.recSum());

console.log("Max Ele : ", list.maxEle());
console.log("Rec Max Ele : ", list.recMaxEle());

console.log(list.linearSearch(5));

console.log(list.linearSearch(9));

console.log(list.recLinearSearch(list.head, 9));

list.moveToFront(9);

list.display();

console.log(list.toString());
