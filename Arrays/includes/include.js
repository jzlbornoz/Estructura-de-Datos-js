const pets = ['dog', 'cat', 'tiger', 'lion'];

let isInclude = false;

for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'cat') {
        isInclude = true;
        break;
    }
}
console.log('include con loop for: ', isInclude);

// .include()
const rta = pets.includes('cat');
console.log('.include()' , rta);