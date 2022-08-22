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
