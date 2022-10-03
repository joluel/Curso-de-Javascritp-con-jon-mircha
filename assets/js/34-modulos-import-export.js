                                                                console.warn('EJERCICIO N° 1');

import saludar, {Saludar, PI, ususario } from './34-constante.js';
import { aritmetica as calculos } from './34-aritmetica.js'

console.log("Archivos modulos");
console.log(PI, ususario );

// console.log(aritmetica.sumar(5,5));
// console.log(aritmetica.restar(5,2));
console.log(calculos.restar(5,2));
console.log(calculos.sumar(5,2));
saludar();

let saludo = new Saludar();
saludo;




