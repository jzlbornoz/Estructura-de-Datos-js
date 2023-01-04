const foods = ['arepa', 'hotdog', 'pizza'];
const separator = '/'
let rta = '';
for (let i = 0; i < foods.length; i++) {
    const element = foods[i];
    rta += element + separator;
}

console.log('join con loop for', rta);

// .join
const rta1 = foods.join(separator);
console.log('.join(): ', rta1);

// split
const title = "Hola mundo que hacen xd";
const res = title.split(' ').join('-').toLocaleLowerCase();
console.log('.split(): ', res);