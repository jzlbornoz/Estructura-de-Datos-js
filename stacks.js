class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const NewNode = new Node(value);
        if (this.length === 0) {
            this.top = NewNode;
            this.bottom = NewNode;
        } else {
            const holdingPointer = this.top;
            this.top = NewNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            console.log("No hay nada :(");
        } else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            const holdingPointer = this.top.next;
            delete this.top;
            this.top = holdingPointer;
        }
        this.length--;
        return this;
    }
}

const stack = new Stack();