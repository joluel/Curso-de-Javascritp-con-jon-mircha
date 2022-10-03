                                                                console.warn('EJERCICIO N° 1');

console.log(console)
console.error("Eres un tonto");
console.warn("Esto es una warning");
console.info("console.info")
console.log("un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Carlos",
apellido = "Gonzalez",
edad = 32;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre}  ${apellido} y tengo ${edad} años de edad`);
console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();

console.group("Los cursos de carlos gonzalez");
console.log("hola amigo");
console.log("hola hijo");
console.log("hola hijo 1");
console.log("hola mundo");
console.groupEnd();

console.groupCollapsed("Los cursos de carlos gonzalez");
console.log("hola amigo");
console.log("hola hijo");
console.log("hola hijo 1");
console.log("hola mundo");
console.groupEnd();
console.clear();
console.log(console);
console.table(Object.entries(console).sort());

console.clear();

const   numeros  = [1,2,3,4,5],
        vocales = ["a","e","i","o","u"];

        console.table(numeros);
        console.table(vocales);

        const perro = {
            nombre: "Camilin",
            raza: "Chandoso",
            color: "Marron"
        }

        console.table(perro);

console.clear();

console.time("cuanto tiempo tarda mi codigo");
const arreglo = Array(1000);

for (let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("cuanto tiempo tarda mi codigo")
// console.log(arreglo);

console.clear();

for (let i = 0; i <= 100; i++){
    console.count("codigo for");
    console.log(i);
}

console.clear();
let x = 5,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";

    console.assert(x < y, {x,y,pruebaXY});

    








