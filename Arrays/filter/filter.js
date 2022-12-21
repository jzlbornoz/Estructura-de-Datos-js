// Metodo filter hecho por loop for

const array = ['juan' , 'jose' , 'angel', 'joserafael', 'kai'];
const newArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length >= 4) {
        newArray.push(element);
    }
    
}
console.log('Original Array' , array);
console.log('newArray' , newArray);

//.filter()
const ArrayWithFilter = array.filter(item => item.length > 5);
console.log('== .filter() ==');
console.log('Array with filter' , ArrayWithFilter);
console.log('Original Array' , array);

const items = [{
    name: 'cartuchera',
    price: 10,
    sold: false,
    id: 0
},
{
    name: 'lapiz',
    price: 3,
    sold: true,
    id: 1
},
{
    name: 'libro',
    price: 7,
    sold: false,
    id: 2
},
{
    name: 'bolso',
    price: 15,
    sold: true,
    id: 3
}];

const rta = items.filter(item => item.sold);
console.log('                               ');
console.log('Original Array of items' , items);
console.log('= Segunda practica', rta);

const rta2 = items.filter(item => item.price > 9 && item.name.length > 5);
console.log('                               ');
console.log('Original Array of items' , items);
console.log('= tercera practica', rta2);

//Buscador 
const search = (query) => {
    const rta3 = items.filter(item => item.name.includes(query));
    return rta3;
}
console.log('                               ');
console.log('Original Array of items' , items);
console.log('= Buscador practica', search('a'));