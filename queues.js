class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const NewNode = new Node(value);
        if (this.length === 0) {
            this.first = NewNode;
            this.last = NewNode;
        } else {
            this.last.next = NewNode;
            this.last = NewNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length === 0) {
            console.log("No hay nada :(");
        } else if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const queue = new Queue();