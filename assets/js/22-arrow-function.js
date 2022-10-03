                                                    console.warn('EJERCICIO N° 1 ');

/*
    EJERCICIO CON JHON MIRCHA
    */

const saludo = ( ) => {
    console.log("Hola mundo");
}
saludo();


const casa = ( nombre) => {
    console.log(`hola, ${nombre}`);
}
casa("Carlos Jose");

const sumar = (a, b ) => a + b;
console.log(sumar(10 , 5));


const funcionDeVariasLineas = ( ) => {
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
}

funcionDeVariasLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));

// function perro ( ) {
//     console.log(this);
// }
// perro();

const perro1 = {
    nombre: "Camilin",
    ladrar () {
        console.log(this);
    }
}

perro1.ladrar();

                                            console.warn('EJERCICIO N°  2');

const familia = ["Charol ", "Elida"];

familia.forEach((padres, hijos) => console.log(`Mi papa es ${padres} y mi mama es ${hijos}`));

                                            console.warn('EJERCICIO N° 3 ');

const prueba3 = (nombre, edad, profesion) => {
console.log(`Mi nombre es ${nombre}, tengo ${edad} años, y soy ${profesion}`);
}
prueba3("Carlos Jose Gonzalez Castellanos", 32, "Oficial de Policia" );

                                            console.warn('EJERCICIO N° 4');

const prueba4 = (a, b ) => {
    if (a > b ) {
        console.log("El numero es mayor");
    } else if (a === b) {
        console.log("El numero es igual");
    } else {
        console.log("El numero es menor");
    }    
}
prueba4(5, 9);

                                            console.warn('EJERCICIO N° 5');

const prueba5 = {
    nombre: "Elida",
    apellido: "Castellanos",
    lema () {
        console.log("hola", this);
    } 
}

prueba5.lema("Dios te bendiga hijo mio");