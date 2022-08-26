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
    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;

    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
}

let LinkedList = new MySyngleLinkedList(1);

console.log(LinkedList);
console.log(LinkedList.append(23));
console.log(LinkedList);
console.log(LinkedList.prepend(12));