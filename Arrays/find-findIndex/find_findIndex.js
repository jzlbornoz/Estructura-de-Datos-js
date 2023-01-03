const numbers = [12, 4, 6, 77, 23, 12, 53];
let rta = undefined;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 4) {
        rta = element;
        break;
    }
}
console.log('find con loop for: ', rta);

// .find()
const rta1 = numbers.find(number => number === 4);
console.log('rta: ', rta1);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta2 = products.find(element => element.id === '🥞');
console.log('rta2: ', rta2);

const rta3 = products.findIndex(element => element.id === '🥞');
console.log('rta3: Index:', rta3);