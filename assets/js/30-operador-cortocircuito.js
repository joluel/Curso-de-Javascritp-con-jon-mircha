                                                                console.warn('EJERCICIO N° 1');

/*
CORTOCIRCUITO OR: cuando el valor de la izquierda en la 
expresion siempre pueda validar a true, es el valor que
se cargara por defecto,

CORTOCIRCUITO AND: Cuando el valor de la izquiera en la 
expresion siempre pueda validar a false, es el valor 
que se cargara por defecto
*/

function saludar (nombre) {
    nombre = nombre || "***Vacio***"
    console.log(`Hola ${nombre}`);
}


saludar("Carlos");
saludar();

console.warn('|| ');
console.log("Cadena" || "Valor de la derecha");
console.log(32 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");

console.warn('false cin || ');
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.warn('&& Falsos');
console.log(0 && "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");

console.warn(' && Verdaderos');

console.log("Cadena" && "Valor de la derecha");
console.log(32 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");

