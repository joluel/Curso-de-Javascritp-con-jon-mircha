                                            console.warn('EJERCICIO N° 1 ');

function sumar (a, b,  ...c ) {
let resultado = a + b;

c.forEach(function (n) {
    resultado += n
});
return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5,));
console.log(sumar(1,2,3,4,5,6));

//OPERADOR SPREAD

const   arr1 = [1, 2, 3, 4, 5]
        arr2 = [6,7,8,9,0];

    console.log(arr1, arr2);

    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

                                                console.warn('EJERCICIO N° 2');

     function ejercicio1 (a, b, ...c ) {
        let prueba = a * b;

        c.forEach(function (n) {
            prueba += n
        });
        return prueba
     }
    
     console.log(ejercicio1(2, 2));
     console.log(ejercicio1(2, 2, 2));

     //OPERADOR SPREAD

     const  familia = ["Carlos", "Jose", "Luciana", "Elias"],
            padres =  ["Charol", "Elida"];

            const familia1 = [...familia, ...padres];

            familia1.push("Elif")

            console.log(familia1);


                                                    console.warn('EJERCICIO N° 3 ');
            
function ejercicio2 (a, b, ...c ) {
let resta = a - b;

c.forEach( function (n)  {
    resta -= n
});
    return resta;
}

console.log(ejercicio2(15, 5));
console.log(ejercicio2(15, 5, 3));

//OPERADOR SPREAD

const   renaultGamaAlta = ["Koleos", "Duster", "Captur", "Setway"],
        renaultGamaBaja = ["Logan", "Sandero", "Kwid",];

        const nuevos = [...renaultGamaAlta, ...renaultGamaBaja];
        const nuevos1 = [renaultGamaAlta, renaultGamaBaja]; //RECUERDA QUE AL ENVIAR A CONSOLA ESTE CODIGO SE IMPRIME DOS ARRAY MIESNTRAS QUE EN EL ANTERIOR UNIFICA LOS ARRAY Y SOLO SALE UNO
        console.log(nuevos);
        console.log(nuevos1);