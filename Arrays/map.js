const array = [1, 3, 45, 32, 56];

const newArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray[i] = `Este es el # ${element}`;
}
console.log(newArray);


// Con Map
const NewArray = array.map(item => `Este es el # ${item}`);