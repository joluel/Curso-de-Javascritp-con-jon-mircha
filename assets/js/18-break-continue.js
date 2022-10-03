                                    console.warn('EJERCICIO N° 1');

const numeros = [1,2,3,4,5,6,7,8,9,0];

for ( let i = 0; i < numeros.length; i++ ) {
    if ( i === 5 ) {
        break;
    }
    console.log(numeros[i]);
}

for ( let i = 0; i < numeros.length; i++ ) {
    if ( i === 5 ) {
        continue;
    }
    console.log(numeros[i]);
}

                                    console.warn('EJERCICIO N° 2');

const ejercicio2 = [1,2,3,4,5,6,7,8,9,0];
for ( let index = 0; index < ejercicio2.length; index++) {
    if ( index === 2){
        break;
    }
    console.log(ejercicio2[index]);
}

for ( let index = 0; index < ejercicio2.length; index++) {
    if ( index === 2){
        continue;
    }
    console.log(ejercicio2[index]);
}

for ( let index = 0; index < ejercicio2.length; index++) {
    if ( index >= 2){
        continue;
    }
    console.log(ejercicio2[index]);
}

for ( let index = 0; index < ejercicio2.length; index++) {
    if ( index === 2){
        continue;
    }
    console.log(ejercicio2[index]);
}

                                        console.warn('EJERCICIO N° 3');

const ejercicio3 = [2,4,6,8,10,12,14,16,18,20];
for (let i = 0; i < ejercicio3.length;i++){
    if ( i === 6 ){
        break;
    }
    console.log(ejercicio3[i]);
}

for (let i = 0; i < ejercicio3.length;i++){
    if ( i === 2     ){
        continue;
    }
    console.log(ejercicio3[i]);
}

//SUMA DE EDADES
const age = [61, 59, 32, 30, 25, 1];
let totalEdad = 0;

for (let i = 0; i < age.length; i++){
    totalEdad += age[i];
}
console.log(totalEdad);

// Numeros pares 
const miArray = [];
for ( let i = 2; i < 100; i+= 2) {
    miArray.push(i);
}
console.log({miArray});

//NUMEROS IMPARES
const impares = [];
for ( let i = 1; i < 10; i += 2) {
    impares.push(i);
}
console.log({impares});

//CONTAR HACIA ATRAS

const atras = [];
for ( let i = 10; i > 0; i -= 1) {
    atras.push(i);
}
console.log({atras});

//CONTAR HACIA ADELANTE
const adelante = [];
for ( let i = 1; i < 30; i += 1) {
    adelante.push(i);
}
console.log({adelante});

                                    console.warn('EJERCICIO N° 4 ');

const numberOne = [1,2,3,4,5,6,7,8,9,10];

for( let i = 0; i < numberOne.length; i++) {
    if (i === 6) {
        break;
    }
    console.log(numberOne[i]);
}

for(let i = 0; i < numberOne.length; i++) {
    if( i === 8){
    continue;
    }
    console.log(numberOne[i]);
}



