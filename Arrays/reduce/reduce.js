const productPrice = [10, 23, 12, 34, 34, 12, 876, 87, 4];

let totalPrice = 0;

for (let i = 0; i < productPrice.length; i++) {
    const element = productPrice[i];
    totalPrice += element;

}
console.log(productPrice);
console.log("Reduce con loop for: ", totalPrice);

// .reduce();
const itemsPrice = [1, 23, 34, 2];
const rta = itemsPrice.reduce((total, element) => total + element, 0);

console.log(itemsPrice);
console.log('.reduce(): ' , rta);
