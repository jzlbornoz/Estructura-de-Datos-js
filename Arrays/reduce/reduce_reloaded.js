// histograma
console.log('=== reduce reloaded ===');
const items = [1, 2, 3, 3, 2, 1, 3, 1, 4, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj
}, {});

console.log(items);
console.log('Histograma con .reduce()', rta)

// -- 

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];
console.log(data);

// se obtiene el array de niveles con un map
const arrayLevel = data.map(item => item.level);
console.log(arrayLevel);

// Se hace el historigrama de los niveles
const rta1 = arrayLevel.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1
    }
    return obj
}, {});

console.log('Histograma de los niveles de personas con .reduce()', rta1);

// Mismo algoritmo de manera simplificada con paylines, significa que el output de un proceso es el input de otro.

const rta2 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] += 1
        }
        return obj
    }, {});

console.log(rta2);

// Agrupacion por rangos

const productsPrice = [2, 3, 4, 5, 1, 12, 17, 19, 8, 3, 13, 9];

const rta3 = productsPrice.reduce((obj, item) => {
    if (item < 10) {
        obj["1 - 10"] += 1;
    } else {
        obj["10 - 20"] += 1;
    }
    return obj
}, {
    "1 - 10": 0,
    "10 - 20": 0

})

console.log('Agrupacion por rangos', productsPrice);
console.log(rta3);

const rta4 = data.reduce((obj, item) => {
    if (item.level == "low" || item.level == "medium") {
        obj["low-medium"] += 1;
    } else {
        obj["hight"] += 1;
    }
    return obj;
}, {
    "low-medium": 0,
    "hight": 0,
})
console.log(rta4);