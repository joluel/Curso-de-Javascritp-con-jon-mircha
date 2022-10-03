                                        console.warn('EJERCICIO N° 1 ');

let numeros = [1, 2, 3, 4];
const [one, two, three] = numeros;
console.log(one, two, three);

                                        console.warn('EJERCICIO N° 2 ');

let familia = ["Papá", "Mama", "Carlos", "Jhoel", "Elizabeth"];
const [p, m, c, j, e] = familia;
console.log(p, m, c, j, e);

                                        console.warn('EJERCICIO N° 3');

let carros = [ "Toyota", "renault", "Honda", "Kia", "Tesla"];
const [ c1, c2, c3, c4, c5] = carros;
console.log(c1, c2, c3, c4, c5);
console.table({c1, c2, c3, c4, c5}); //con los parentesis se organiza mejor la tabla

                                        console.warn('EJERCICIO N° 4');

let barrio = [ "Chapu", "bebito", "lucas", "yeye", "mello"];
const [ v1, v2, v3, v4, v5] = barrio;
console.log(v1, v2, v3, v4, v5 );

                                        console.warn('EJERCICIO N° 5');

let malaga = ["Gladys", "Polo", "Hermes", "Rosalba", "Elida", "Alicia"];
const [h1, h2, h3, h4, h5, h6] = malaga;
console.log(h1, h2, h3, h4, h5, h6);
console.table({h1, h2, h3, h4, h5, h6});

                                        console.warn('EJERCICIO N° 6');

let carlos = {
    nombre: "Carlos Jose",
    apellido: "Gonzalez Castellanos",
    edad: 32,
    email: "josejhoel89@gmail.com"
}

let {nombre, apellido, edad, email} = carlos;
console.log(nombre, apellido, edad, email);

                                        console.warn('EJERCICIO N°  7');

const joe = {
    nombre2: "Jhoel Dario",
    apellido2: "Gonzalez Castellanos",
    edad2: 30,
    email2: "Desconocido"
}

const {nombre2, apellido2, edad2, email2 } = joe;
console.log(nombre2, apellido2, edad2, email2);

                                        console.warn('EJERCICIO N° 8');

const gonzalezCastellanos = {
    papa: {
        nombrep: "Carlos Dario",
        apellidop: "Gonzalez Coronado",
        edadp: 61,
        profesionp: "Conductor",
    },
    mama: {
        nombrem: "Elida",
        apellidom: "Castellanos Carrillo",
        edadm: 59,
        profesionm: "Docente"
    },
    che: {
        nombrec: "Carlos Jose",
        apellidoc: "Gonzalez Castellanos",
        edadc: 32,
        emailc: "josejhoel89@gmail.com"
    },
    joel: {
        nombrej: "Jhoel Dario",
        apellidoj: "Gonzalez Castellanos",
        edadj: 30,
        emailj: "Desconocido"
    },
    piyu: {
        nombrey: "Elizabeth yelitza",
        apellidoy: "Gonzalez Castellanos",
        edady: 25,
        profesiony: "Comunicadora Social"
    }
}

const {papa, mama, che, joel, piyu} = gonzalezCastellanos;
console.log(papa, mama, che, joel, piyu);



                                        









