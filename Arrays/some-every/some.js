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
console.log('Agenda:' , isOverlap(newAppointment));
