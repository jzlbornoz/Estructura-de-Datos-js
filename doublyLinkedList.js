class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;

        this.length++;
        return this;
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const node = new Node(value);
        const firstPointer = this.getIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = node;
        node.prev = firstPointer;
        node.next = holdingPointer;
        holdingPointer.prev = node;

        this.length++;
        return this;
    }
    getIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const doublyLinkedList = new MyDoublyLinkedList(1);