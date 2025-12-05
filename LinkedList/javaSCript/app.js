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
  insertNodeAtFirst(value) {
    let temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  }

  insertNodeAtLast(value) {
    let temp = new Node(value);
    if (this.isEmpty()) {
      this.head = temp;
      return;
    }

    let current = this.head;
    let lastNode = null;

    while (current !== null && current.next !== null) {
      lastNode = current;
      current = current.next;
    }

    lastNode.next = temp;
  }

  insertNodeAt(index, value) {
    let temp = new Node(value);
    if (index === 0) {
      temp.next = this.head;
      this.head = temp;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current === null) throw new Error("index out of range");
      current = current.next;
    }

    temp.next = current.next;
    current.next = temp;
  }

  insertInSortedList(value) {
    let temp = new Node(value);

    let current = this.head;
    let prev = null;

    if (this.isEmpty()) {
      this.head = temp;
      return;
    }

    if (this.head.data > value) {
      temp.next = this.head;
      this.head = temp;
      return;
    }

    while (current !== null) {
      if (current.data > value) {
        break;
      }

      prev = current;
      current = current.next;
    }

    prev.next = temp;
    temp.next = current;
  }

  deleteFirstNode() {
    if (this.isEmpty()) {
      return;
    }

    let temp = this.head.next;

    this.head = temp;
  }

  deleteLastNode() {
    if (this.isEmpty()) return;

    let current = this.head;

    // while (current !== null && current.next.next !== null) {
    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  deleteNodeAtPos(index) {
    if (this.isEmpty()) return;
    if (index === 0) {
      let temp = this.head;
      this.head = temp.next;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current === null) throw new Error("Index out of bound");
      current = current.next;
    }

    if (current.next === null) throw new Error("Index out of bound");
    current.next = current.next.next;
  }

  isSortedList() {
    let current = this.head;
    if (this.isEmpty()) return true;

    while (current !== null && current.next !== null) {
      if (current.data > current.next.data) {
        return false;
      }
      current = current.next;
    }
    return true;
  }
  removeDuplicates() {
    if (this.isEmpty()) return;

    let current = this.head;

    while (current !== null && current.next !== null) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  reverseList() {
    let r = null;
    let q = null;
    let p = list.head;

    while (p !== null) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
    }
    this.head = q;
  }

  recReverseList() {
    if (this.isEmpty()) return;
    this.recReverseListHelper(null, this.head);
  }
  recReverseListHelper(prev, curr) {
    if (curr !== null) {
      this.recReverseListHelper(curr, curr.next);
      curr.next = prev;
    } else {
      this.head = prev;
    }
  }

  isCycle() {
    if (this.isEmpty()) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }
    return false;
  }
  getMiddle() {
    if (this.isEmpty()) return;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  getIntersection(list1, list2) {
    if (list1.head === null || list2.head === null) {
      return -1;
    }

    let st1 = [];
    let st2 = [];

    let firstList = list1.head;

    while (firstList !== null) {
      st1.push(firstList);
      firstList = firstList.next;
    }

    let secondList = list2.head;

    while (secondList !== null) {
      st2.push(secondList);
      secondList = secondList.next;
    }
    let intersection = null;

    while (st1.length > 0 && st2.length > 0) {
      let a = st1.pop();
      let b = st2.pop();

      if (a === b) {
        intersection = a;
      } else {
        break;
      }
    }
    return intersection.data !== null ? intersection.data : -1;
  }
}

const list = new LinkedList();

// let arr = [8, 3, 7, 12, 9];
// let arr = [1, 2, 3, 5, 5, 6, 7, 8];

let arr = [1, 2, 3, 5, 6, 7, 8, 9];

list.createList(arr);

// list.display();
// list.displayRec();
// list.displayRevRec();

// console.log("Total Nodes : ", list.countNode());

// console.log("Total Nodes Rec : ", list.recCountNode(list.head));
// console.log(list.countNodeRec());

// console.log("Sum : ", list.sum());

// console.log("Rec Sum : ", list.recSum());

// console.log("Max Ele : ", list.maxEle());
// console.log("Rec Max Ele : ", list.recMaxEle());

// console.log(list.linearSearch(5));

// console.log(list.linearSearch(9));

// console.log(list.recLinearSearch(list.head, 9));

// list.moveToFront(9);

// list.display();
// list.insertNodeAtFirst(11);

// list.insertNodeAtLast(200);

// list.insertNodeAt(0, 22);

// list.insertNodeAt(30, 119);

// list.insertInSortedList(4);
// list.insertInSortedList(0);
// list.insertInSortedList(122);
// list.insertInSortedList(30);
// list.deleteFirstNode();

// list.deleteLastNode();
// list.deleteNodeAtPos(0);
// list.deleteNodeAtPos(4);
// list.removeDuplicates();
// console.log(list.isSortedList());
// list.reverseList();
// list.recReverseList();

// let a = new Node("a");
// let b = new Node("b");
// let c = new Node("c");
// let d = new Node("d");
// let e = new Node("e");

// list.head = a;
// a.next = b;
// b.next = c;
// c.next = a;

// console.log(list.isCycle());
console.log(list.getMiddle());
console.log(list.toString());

const list1 = new LinkedList();
const list2 = new LinkedList();

let a = new Node(10);
let b = new Node(20);
let c = new Node(30);
let d = new Node(40);
let e = new Node(50);

list1.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

list2.head = new Node(5);
list2.head.next = c; // intersection at node 30

console.log("Two Pointer:", list1.getIntersection(list1, list2));
