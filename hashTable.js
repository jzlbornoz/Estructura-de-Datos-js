class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0; for (let i = 0; i < key.length; i++) { hash = (hash + key.charCodeAt(i) * i) % this.data.length; }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address]; // currentBucket es como decir el indice en un array
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                  return currentBucket[i][1];
                }

            }
        }
        return undefined;
    }

}
const myHashTable = new HashTable(50);


myHashTable.set("Adrian", 12);
myHashTable.set("Juan", 12);
myHashTable.set("Pedro", 1);
myHashTable.set("Eva", 14)
myHashTable.set("Anda", 15);
console.log(myHashTable)
console.log(myHashTable.get("Eva"));