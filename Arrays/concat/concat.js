const array1 = [1, 2, 3, 4,];
const array2 = [5, 6, 7, 8,];

const newArray = [...array1];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    newArray.push(element);
}

console.log('array 1: ', array1);
console.log('array 2: ', array2);
console.log('new Array: ', newArray);

// .concat()

const rta = array1.concat(array2);
console.log('.concat(): ', rta);