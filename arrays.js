//construccion de Array con clases

class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    };
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.data
    }
}

const array = new myArray();