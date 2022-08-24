// 1 -- > 2 -- > 3 -- > 4 -- > null

let exampleLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    new: null
                }
            }
        }
    }
}

// ---

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySyngleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
}

let LinkedList = new MySyngleLinkedList(1);

console.log(LinkedList);