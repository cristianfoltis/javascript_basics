/*1. Create the following data structures:
1. queue
2. stack
3. doubly linked list
and implement operations to insert item, remove item and print all items in the queue / stack / doubly linked list.
*/

// Queue

class Queue {
  constructor() {
    this.records = [];
  }

  enqueue = (record) => this.records.unshift(record);
  dequeue = (record) => this.records.pop(record);
  print = () => console.log("Queue:  " + this.records);
}

const q = new Queue();
q.enqueue(5);
q.enqueue(12);
q.enqueue(10);
q.enqueue(100);
q.enqueue(81); //81 -> 100 -> 10 -> 12 -> 5
q.print(); // 81 -> 100 -> 10 -> 12 -> 5
q.dequeue();
q.print(); // 100 -> 10 -> 12 -> 5

//Stack with array

class Stack {
  constructor() {
    this.stack = [];
  }
  insertItem = (item) => this.stack.push(item);
  deleteItem = (item) => this.stack.shift(item);
  print = () => console.log("Stack: " + this.stack);
}

const s = new Stack();
s.insertItem(81);
s.insertItem(100);
s.insertItem(10);
s.insertItem(2);
s.insertItem(5);
s.print(); // 81 -> 100 -> 10 -> 12 -> 5
s.deleteItem(81);
s.print(); // 81 -> 100 -> 10 -> 12 -> 5

// doubly linked list
// A <-> B <-> C     A:prev:null, A:next:B/ B:prev:A, B:next:C/ C:prev:B, C:next:null
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  pushNodeFromTail(value) {
    const newNode = new Node(value); //new node
    {
      if (!this.length) {
        //if list empty -> newNode = head + tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode; //current tail -->(next) newNode
        newNode.prev = this.tail; //newNode (prev) --> current tail
        this.tail = newNode; //newNode = newTail
      }
      this.length = this.length + 1;
      return newNode;
    }
  }

  removeNodeFromTail() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.tail;

      if (this.head.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev; // set node before current tail as new tail
        this.tail.next = null; // remove connection from new tail to the old tail
        nodeToRemove.prev = null; // remove connection from old tail to new tail
      }
      this.length = this.length - 1;

      return nodeToRemove; // return old tail
    }
  }

  pushNodeFromHead(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //set new node next to current head
      this.head.prev = newNode; //set the current head prev to new node
      this.head = newNode; //set list head to new node
    }
    this.length = this.length + 1;
    return newNode;
  }

  removeNodeFromHead() {
    if (!this.length) {
      return null;
    }
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;
      this.head.prev = null; // remove connections from the new head to the old head <=
      nodeToRemove.next = null;
    }
    this.length = this.length - 1;
    return nodeToRemove;
  }
}

// empty list
const doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList); // DoublyLinkedList { length: 0, head: null, tail: null }

// pushNodeFromTail
console.log(doublyLinkedList.pushNodeFromTail("First Node")); // Node { value: 'First Node', prev: null, next: null }
console.log(doublyLinkedList); //  DoublyLinkedList { length: 1} head: Node { value: 'new node 1', prev: null, next: null } tail: Node { value: 'new node 1', prev: null, next: null }

console.log(doublyLinkedList.pushNodeFromTail("Second Node"));
console.log(doublyLinkedList); // l = 2 / head = "First Node" prev = null; next = "Second Node" / tail = "Second Node", prev = "First Node", next = null

console.log(doublyLinkedList.pushNodeFromTail("Third Node"));
console.log(doublyLinkedList);

console.log(doublyLinkedList.pushNodeFromTail("Fourth Node"));
console.log(doublyLinkedList);

// removeNodeFromTail

console.log(doublyLinkedList.removeNodeFromTail());
console.log(doublyLinkedList);

// pushNodeFromHead

console.log(doublyLinkedList.pushNodeFromHead(1994));
console.log(doublyLinkedList);

console.log(doublyLinkedList.pushNodeFromHead(2022));
console.log(doublyLinkedList);

//  removeNodeFromHead

console.log(doublyLinkedList.removeNodeFromHead());
console.log(doublyLinkedList); //after all operations we shall have Head = 2022 and Tail = "Third Node"
