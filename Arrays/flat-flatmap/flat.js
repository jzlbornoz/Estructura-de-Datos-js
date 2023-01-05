const matriz = [
    [1, 3, 5],
    [5, 6, 2],
    [9, 8, 4],
]

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    for (let j = 0; j < element.length; j++) {
        const number = element[j];
        newArray.push(number);
    }
}

const rta = matriz.flat();
console.log('flat con loop for: ', newArray);
console.log('.flat(): ', rta);

// array con varios niveles usando recursividad.

const matriz2 = [
    [1, 3, [12, 26, [67]]],
    [5, 6, 2],
    [9, 8, [23, 34, 6]],
]

const flatRecursivo = (matriz) => {
    let newArray = [];
    if (typeof matriz != 'object') return [matriz];
    matriz.map(item => {
        newArray = newArray.concat(flatRecursivo(item));
    });
    return newArray;
}

const res = matriz2.flat(4);
console.log('Recursividad: ', flatRecursivo(matriz2));
console.log('.flat(4): ', res);