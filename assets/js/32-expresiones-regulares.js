                                                                console.warn('EJERCICIO N° 1');

/*
Expresiones Regulares
- son una secuencia de caracteres  que forman un
patron de busqueda principalmente utilizada para la 
busqueda de patrones de cadenas de caracteres.
*/

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit deleniti est, ratione quod harum unde eligendi labore! Deserunt, est ut voluptate natus ipsa voluptatem autem nulla a et aliquam?";


// let expReg = new RegExp("Lorem", "i");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

                                                                console.warn('EJERCICIO N° 2');

let prueba1 = [1,2,3,4,5,6,7,9,8,9,10,11,12,13,14,15,16,17,18,19,20];

let expNum = /20/;
console.log(expNum.test(prueba1));
console.log(expNum.exec(prueba1));

                                                                console.warn('EJERCICIO N° 3 ');

//Buscar una serie de dígitos.
let datosAleatorios = "015 354 8787 687351 3512 8735 322";
let cuatroDigitos = /\b\d{3}\b/g;

console.table(datosAleatorios.match(cuatroDigitos));

//Busca una palabra (del alfabeto latino) que comience con A

                                                                console.warn('EJERCICIO N° 4');
                                                                

let carlos = "Estoy segura de que no soy Carlos, dijo, 'porque su cabello se hace en rizos tan largos, y el mío no se riza en absoluto, parece un culo'.";
let buscaCarlos = /\b[cC]\w+/g;

console.table(carlos.match(buscaCarlos));

                                                                console.warn('EJERCICIO N° 5');

let jose = "Mi hijo Jose Jhoel el es un niño muy lindo e inteligente, Jose le gusta mucho los video juegos en especial GtaV, y Fornite"
let hijo1 = /\b[jJ]\w+/g;

console.table(jose.match(hijo1));

                                                                console.warn('EJERCICIO N° 6');

let luci = "Luciana es una niña hermosa mi segunda hija y es un niña muy sentimental, pechichona y le gusta mucho bailar, espero poder tenerla siempre a mi lado y que aprenda a decir la le li lo lu";
let hijo2 = /\b[lL]\w+/g;

console.table(luci.match(hijo2));

                                                                console.warn('EJERCICIO N° 7');

let edades = " 61, 59, 32, 30, 25, 6, 4, 3, 1";
let gonzalezC = /\b\d{1}\b/g;

console.table(edades.match(gonzalezC));





