const items = [{
    name: 'cartuchera',
    price: 10,
    id: 0
},
{
    name: 'lapiz',
    price: 3,
    id: 1
},
{
    name: 'libro',
    price: 7,
    id: 2
},
{
    name: 'bolso',
    price: 15,
    id: 3
}];

const items1 = [{
    name: 'cartuchera',
    price: 10,
    id: 0
},
{
    name: 'lapiz',
    price: 3,
    id: 1
},
{
    name: 'libro',
    price: 7,
    id: 2
},
{
    name: 'bolso',
    price: 15,
    id: 3
}];
// rta0
const rta0 = items.map(item => item.price);
console.log('rta0', rta0);
console.log("Original", items);
console.log('======================');


/* rta1  
Con este codigo se modifica el array original, 
ya que no se hace una copia del objeto sino que se llama mediante a la referencia en memoria */
const rta1 = items.map(item => {
    item.tax = 0.7;
    return item;
})
console.log('rta1 con Modificacion en el array Original', rta1);
console.log("Original", items);
console.log('======================');

// rta2
const rta2 = items1.map(item => {
    return {
        ...item,
        tax: 0.07,
    }
})
console.log('rta2 Sin Modificacion en el array Original', rta2);
console.log("Original", items1);
console.log('======================');

