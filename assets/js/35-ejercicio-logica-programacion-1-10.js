                                                                console.warn('EJERCICIO LOGICA PROGRAMACION 1/10');
                                                                console.warn('EJERCICIO N° 1 ');

/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

// function ejercicio1 (cadena ="") {
//       if (!cadena) {
//         console.log('No ingresaste ninguna cadena');        
//       } else {
//         console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
//       }
// }

// ejercicio1();
// ejercicio1("hola mundo");

const ejercicio1 = (cadena= "") => 
    (!cadena) 
    ? console.log("No ingresaste ninguna cadena") 
    : console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`); 

ejercicio1("hola mundo");

                                                                console.warn('EJERCICIO N° 2 ');

/*
2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const ejercicio2 = (cadena = "", longitud= undefined) =>
    (!cadena)
    ?console.log("No ingresaste el texto")
    :(longitud === undefined)
        ? console.log("No ingresaste la longitud para recortar el texto")
        :console.log(cadena.slice(0,longitud));

    ejercicio2("Hola mundo", 4);
    ejercicio2();
    ejercicio2("Hola Hola", 4);
    ejercicio2("", 5);

                                                                console.warn('EJERCICIO N° 3');

/*
3) Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const ejercicio3 = (cadena = " ", separador=undefined) => 
  (!cadena)
  ?console.log("No ingresaste una cadena de texto")
  :(separador===undefined)
  ?console.log("No ingresaste el caracter separador")
  :console.log(cadena.split(separador));

  ejercicio3("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam minima praesentium officiis quae expedita assumenda illum, amet porro facilis vel iure asperiores sunt eum. Odit rem voluptas fugit neque!", " ");
  ejercicio3("enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, novieembre, diciembre", " ");
  ejercicio3();
  ejercicio3("hola mundo");
  ejercicio3("", "-");


                                                                console.warn('EJERCICIO N° 4');

/*
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const ejercicio4 = (texto = " ", veces=undefined) => {
    if (!texto) return console.log("No ingresaste un texto");
     
    if ( veces === undefined) return console.log("No ingresaste el numero de veces a repetir el texto");

    if ( veces === 0 ) return console.error("El numero de veces no puede ser 0");

    if ( Math.sign(veces === -1)) return console.error("El numero de veces no puede ser negativo.");

    for ( let i = 1; i <= veces; i++){
        console.log(`${texto}, ${i}`);
    }
}

ejercicio4("Hola Carlos", 4);
ejercicio4("hOLA", 0 );
ejercicio4("Hola", -20);
ejercicio4("", 20);
ejercicio4("Hola mundo", );

    
                                                                console.warn('EJERCICIO N° 5');

/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function invertirCadena(cadena) {
    var nuevaCadena = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        nuevaCadena += cadena[i];
    }
    return nuevaCadena;
}

console.log(invertirCadena("Hola mundo"));
 


const ejercicio5 = (cadena) => {
    let prueba5 = "" ;

    for( let i = cadena.length - 1; i >=0; i--) {
        prueba5 += cadena[i];
    }
    return prueba5;
}

console.log(ejercicio5("Hola Carlos"));

const alreves = (cadena = "") =>
    (!cadena)
    ? console.log("No ingresaste una cadena de texto")
    : console.log(cadena.split("").reverse().join(""));

    alreves("Hola mundo");

                                                                console.warn('EJERCICIO N° 6');

/*
6) Programa una función para contar el número de veces que se 
repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const ejercicio6 = (cadena = "", texto= "") => {
    if (!cadena) return console.log("No ingresaste el texto largo");

    if (!texto) return console.log("No ingresaste el texto a evaluar");

    let i = 0,
    contador = 0;
    
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if(i !== -1) {
            i++;
            contador++;
        }
    }
    return console.log(`La palabra ${texto} se repite ${contador} veces`);
  }

  ejercicio6("Hola mundo adios mundo, chao mundo, edmundo", "mundo");

                                                                console.warn('EJERCICIO N° 7 ');

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const ejercicio7 = (palabra="") => {
    if(!palabra) return console.log("No ingresaste una palabra o frase");

    palabra = palabra.toLocaleLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ? console.log(`Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves} `)
    : console.log(`No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves} `);

}

ejercicio7();
ejercicio7("Hola mundo");
ejercicio7("ojo");
ejercicio7("salas");

                                                                console.warn('EJERCICIO N° 8');

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const ejercicio8 = (texto= "", patron="" ) => 
(!texto)
?console.log("No ingresaste el texto")
:(!patron) 
 ?console.log("No ingresasnte un patron de caracteres")
 : console.log(texto.replace(new RegExp(patron, "ig"),""));

 ejercicio8();
 ejercicio8("xyz1, xyz2, xyz3, xyz4 y xyz5");
 ejercicio8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

 /*


11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

                                                                console.warn('EJERCICIO N° 9');

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

// const ejercicio9 = (numero="", aleatorio="" ) => 
// (!numero)
// ?console.log("No introduciste el numero")
// :console.log("El numero esta fuera de rango")
//  if (numero <=501 ) {
//     console.log("El numero no puede ser menor que 501");
//  } else if ( numero >= 600) {
//     console.log("El numero no puede ser mayor que 600 ");
//  } 

 
const aleatorio = () => console.log((Math.round(Math.random()* 100)+ 500));
aleatorio();

                                                                console.warn('EJERCICIO N° 10');

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), 
 pe. miFuncion(2002) devolverá true.
*/













