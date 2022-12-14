# == Estructura de Datos ==

- Son una colecciones de valores, que nos permite organizar de cierta forma los datos para que puedan ser utilizados de manera eficiente.

## == Arrays ==

- Un array o lista, es una coleccion de informacion, pueden ser estaticos o dinamicos, javascript en particular maneja por default los arrays dinamicos y C maneja las listas de forma estatica.

- Estaticos: La computadora sabe de dónde a donde esta cada información en memoria o en este caso el numero exactamente.

```
const num = [2,5,6,0];
```

- Dinamicos: No se especifica el tamaño de la lista, por ende la memoria debe otorgar una cantidad considerable de slots
  por si la lista aumenta.

```
const num = [2, 5, 6, 0 , , , ];
```

### Manipulacion de Arrays

- Para dominar este tema se necesita tener claro los siguientes conceptos:

#### Mutabilidad VS Inmutabilidad

- Mutable: es algo que se puede cambiar o agregar.
- Inmutable: es algo que no puede cambiar ni agregar.

#### Metodo .map()

- .map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
- Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.

```
const array = [1, 3, 45, 32, 56];

const newArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray[i] = `Este es el # ${element}`;
}
console.log(newArray);


// Con Map
const NewArray = array.map(item => `Este es el # ${item}`);
```

- Map Reloaded

```
//Map Reloaded
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
```

#### Metodo .filter()

- Filter es un metodo que consiste en filtrar un array original mediante una condicion, creando un nuevo array con los resultados de dicha condicion, por lo cual es inmutable, ya que no se modifica el array original.

```
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
```

#### Metodo .reduce()

- Este emtodo permite queducir un array a un valor o una minima expresion.

```
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

```

##### reduce reloaded

```
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
```

#### Metodo .Some()

- Este emtodo permite reducir un array a true/false dependiendo si algun elemento cumple una determinada condicion.

```
// Some con loop for
const numbers = [1, 3, 4, 5, 7, 9];

let rta = false;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

console.log('Some con loop for: ', rta);

// .some();

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

const rta1 = numbers.some(item => item % 2 === 0);
console.log('.some(): ', rta1);

const rta2 = items.some(item => item.sold);
console.log(rta2);


// Agenda

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 18),
    endDate: new Date(2021, 1, 1, 22),
    title: "Salida con Pure",
}

// Se instala la libreri date-fns `npm i date-fns` para mayor eficiencia.

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    const res = dates.some(date => (
        areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    ))
    if (res) {
        return "Error. Ya tienes una cita en ese rango de tiempo"
    } else {
        return "Espacio libre, cita agendada con exito"
    }
}
console.log('Agenda:', isOverlap(newAppointment));

```

#### Metodo .every()

- Es similar a .some(), solo que valida que todos los items del array cumplan la condicion.

```
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

```

#### Metodo .find() y .findIndex()

- Es un metodo similar a filter, con la diferencia de que find retorna un objeto, el que compla con la condicion dada, y findIndex retorna la posicion de dicho objeto.

```
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
```

#### Metodo .includes()

- Es un metodo que nos retorna true/false si el array incluye algun elemento indicado.

```
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

```

#### Metodo .join() y .split()

- Este metodo permite unir un array por un string en especifico, en cambio split transforma un string a un array.

```
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
```

#### Metodo .concat()

- Como su nombre lo indica, permite concatenar dos arrays inmutablemente.

```
const array1 = [1, 2, 3, 4,];
const array2 = [5, 6, 7, 8,];

const newArray = [...array1];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    newArray.push(element);
}

console.log('array 1: ', array1);
console.log('array 2: ', array2);
console.log('new Array: ', newArray);

// .concat()

const rta = array1.concat(array2);
console.log('.concat(): ', rta);
```

#### Metodo .flat()

- Este metodo permite 'aplanar' un array de arrays, por ejemplo una matriz.

```
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
```

#### Metodo .flatmap()

- Es la union de el metodo map y flat.

```
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
]

console.log('flat-map: ',
    users.map(user => user.attributes).flat()
);
console.log('.flatmap(): ',
    users.flatMap(user => user.attributes)
)

// Manejo de respuesta a una api

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const res = Object.values(calendars); // se convierte en array.
const resFlatted = res.flatMap(item => item.map(date => date.startDate));
console.log(res);
console.log(resFlatted);
```

## == Strings ==

- Los string no son una estructura de datos, pero se guardan en memoria como tal:

```
const saludo = 'HOLA';
const saludo = ["H", "O","L","A"];
```

## == Hash Table ==

- Es una estructura de datos asociativa que relaciona una llave con un valor utilizando la funcion hash, dicha funcion se emplea para calcular el indice en el que van los elementos que estaran en la tabla.
- Hash: “Una función criptográfica hash- usualmente conocida como “hash”- es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud.”

## == Linked List ==

- Éstas son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a un siguiente nodo. Singly Linked List
  En el caso de la Singly Linked List cada Nodo guarda:

1. Valor del nodo (Dato que guarda el nodo ya sea un string, number, boolean, etc).
2. Referencia al nodo siguiente.

- Pensemos en ellas como esos edificios con escaleras donde cada piso sería un Nodo. Si quisiera ir del piso 1 al piso 5, estoy obligado a pasar por los pisos 2, 3 y 4. Además siempre debo entrar por el primer piso.

### == Doubly Linked List ==

- Con este tipo de Linked list tiene la ventaja de tener dos direcciones, es decir, que se pueden recorrer del head al tail y del tail al head, no hace falta hacer un loop para volverla a recorrer.

## == Stacks ==

- Los estacks son basicamente una pila de datos, tienen la logica de LIFO (Last In , First Out).
  Se puede enteneder como una pila de ropa.

## == Queues ==

- Los queues o colas son una estructura de datos similar a un stack pero con la particularidad de que cuenta con una secuencia.

## == Trees ==

- Los trees son una estructura de datos que tienen una estructura con nodos, que estos representan los hijos de un nodo padre.

### Binary trees

- Consta de un nodo root (padre). A partir de dicho nodo descienden de la siguiente manera:

* Un nodo solo puede tener dos descendientes, los descendientes que son mayores al nodo padre se colocaran a la derecha y los que son menores a la izquierda.
* Para buscar en un Binary Search Tree simplemente tienes que preguntarte: ¿Este elemento es mayor o menor que el que estoy buscando? Ohh es mayor, entonces me voy para la izquierda, y así sucesivamente hasta que encuentres el elemento que estabas buscando.

## == Graphs ==

- Los grafos son nodos interconectados, cuentan con dos elementos importandos, los nodos (vertices) y los edges (borde) que son los conectores o pointer de los nodos o vertices.

### Grafos dirigidos y no dirigidos:

- Los grafos dirigidos cuentan con nodos interconectados pero con una sola direccion, mientras que los No Dirigidos cuentan con ambas direcciones.

### Grafos Ponderados y no Ponderados:

- Los grafos ponderados cuentan con vertices con un peso o valor mientras que los no Ponderados no cuentan con algun valor. Los grafos ponderados son utilizados en los mapas o en el calculo de rutas.

### Grafos Ciclicos y Aciclicos

- Los grafos ciclicos cuentan con la particularidad que no importa el nodo en que nos ubiquemos, podremos recorrer todos los nodos en forma de ciclo, mientras que en los aciclicos no.

## Representacion de Grafos

- Hay tres formas de representar los grafos:

### Edge List

- Te dice por medio de pares, quiénes son esos nodos que tienen conexión entre sí, es como si los juntáramos diciendo “este con este, este con este y este con este”, lo normal cuando pareamos cosas.

```
const graph = [
    [2, 0],
    [2, 1],
    [2, 3],
    [3, 1]
];
```

### Adjacent List

- Te dice qué elementos conoce a cuáles, para ponerlo en contexto, imagina a las personas que tu conoces, tú conoces a “n” cantidad de personas, pues básicamente esa sería tu primer índice del arreglo en un adjancent list, pero ten en cuenta que todas esas personas que tú conoces también conocen a otras personas, de entre ellas tú, así que esa sería tu segunda posición del arreglo, todas las personas que otra persona conoce.

```
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph2 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}
```

### Adjancent Matrix

- Esto es un poquito más de imaginación, el Adjancent Matrix te pone a todas las personas que existen en una lista y te empieza a preguntar: ¿Conoces a esta persona? Si sí entonces la pone en 1, si no entonces la pone en 0, y así por cada persona que exista, cada índice representa a una persona, por eso digo que necesitas imaginartelas.

```
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}
```

## == Articles ==

- https://medium.com/@bohndez.dev/estructuras-de-datos-linked-list-en-javascript-e84f3c50a4c4
- https://levelup.gitconnected.com/array-vs-linked-list-data-structure-c5c0ff405f16

# Profesionalizacion de JavaScript

## ¿Qué significa ser un profesional de JavaScript?

- El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

## ¿Qué forma a un profesional?

- Se presenta una lista de estas cosas que lo forman:

* Conocimiento del lenguaje.
* Conocimiento de entornos de programación.
* Mejores prácticas.
* Versado en código.
* Herramientas.
* Ética / Profesionalismo.
* Experiencia.

## El lenguaje: JavaScript

- Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

### No fundamentos

- Los no fundamentos" representan las siguientes características del lenguaje:

* Promesas (nivel pro).
* Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
* Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
* Generadores: esto es raro, pero vamos a ver que sí es eficiente.

### ¿Cómo funciona?

- Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

### Entornos de programación

- Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto.

### Versado en código

- Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

### Mejores prácticas

- No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

### Ética

- Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

### Es responsable.

- Entrega a tiempo sus trabajos, Sabe decir que no, No hace daño.

### Experiencia

- La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

## Scope

- El Scope o ambito de una variable, es lo que define el tiempo de vida de dicha variable, esto evita que se reescriba una variable.
- En javaScript existen 4:
  - Global Scope
  - Funcion Scope
  - Block Scope
  - Module Scope
