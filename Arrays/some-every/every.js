const numbers = [1, 2, 3, 4, 6, 57, 788, 3,];

let rta = true;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 100) {
        rta = !rta;
        break;
    }

}

console.log('every loop for: ', rta);

// .every

const rta2 = numbers.every(item => item < 100);
console.log('.every(): ' , rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 13,
    },
  ];

const rta3 = team.every(person => person.age < 15);
console.log('rta3: ' , rta3);