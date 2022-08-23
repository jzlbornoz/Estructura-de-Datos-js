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
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    //Genera el cambio del indice posterior al eliminado del elemento
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const array = new myArray();


array.push("Juan");
array.push("Jose");
array.push("Ana");

console.log(array);
//console.log("Deleted: " + array.pop());
console.log("==============================");
console.log(array);
console.log(array.delete(0));
console.log(array);