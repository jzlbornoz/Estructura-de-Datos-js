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
