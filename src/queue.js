const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let underlyingList;

    return !this.length ? underlyingList = new ListNode(null) : underlyingList = this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (!this.length) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    
    return this.length++;
  }

  dequeue() {
    let deletedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};

