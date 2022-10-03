console.warn('EJERCICIO N° 1 ');

/*
 Javascript es un lenguaje multiparadigma.
 POO= porgramacion orientada a objetos.
 * clases: Modelo a seguir
 * objetos: Es una instancia de una clase
 * Atributos: Es una caracteristica o propiedad de un objeto ( son variables dentro de un objeto)
 * Metodos: Son las acciones que un objeto puede realizar ( son funciones dentro de un objeto)
 */

 const animal = {
    nombre: "popeye",
    sonar() {
        console.log("Como mi espinaca");
    }
 }

 console.log(animal);
 animal.sonar();

 const animal2 = {
    nombre: "oliva",
    sonar() {
        console.log("Soy bien flaca");
    }
 }
 console.log(animal2);
 animal2.sonar();

 //FUNCION CONSTRUCTORA.

//  function Animal ( nombre, genero ) {
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Metodos.
//     this.sonar = function (){
//         console.log("Hago sonidos por que estoy vivo");
//     }
//     this.saludar = function () {
//         console.log(`hola me llamo ${this.nombre}`);
//     }
//  }

 /*FUNCION CONSTRUCTORA DONDE ASIGNAMOS LOS METODOS AL PROTOTIPO,
 NO A LA FUNCION COMO TAL
 */

 function Animal ( nombre, genero ) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

    //Metodos agregados al prototipo de la funcion constructora 
        Animal.prototype.sonar = function (){
            console.log("Hago sonidos por que estoy vivo");
        Animal.prototype.saludar = function () {
            console.log(`hola me llamo ${this.nombre}`);
    }
 }

 const  popeye = new Animal("popeye", "Macho"),
        oliva = new Animal ("oliva", "Femenino");

        console.log(popeye);
        console.log(oliva);

        popeye.sonar();
        popeye.saludar();
        oliva.sonar();
        oliva.saludar();

                                                                console.warn('EJERCICIO N° 2');

const tony = {
    nombre: "Tony Star",
    apodo: "Iron Man",
    egocentrico() {
        console.log("Yo soy Iron Man");
    } 
}

console.log(tony);
tony.egocentrico();

//FUNCION CONSTRUCTORA

function Tony (nombre, apodo ) {
    this.nombre = nombre;
    this.apodo = apodo;
}

    Tony.prototype.egocentrico = function ( ) {
        console.log(`Yo ${this.nombre} soy ${this.apodo} y soy millonario`);
    }

    const iron = new Tony("Tony Star", "Iron Man");

    console.log(iron);
    iron.egocentrico();

                                                                console.warn('EJERCICIO N° 3');
                                                                
const peter = {
    nombre: "Peter Parker",
    apodo: "Hombre Araña",
    lema() {
        console.log("Tu vecino el hombre añara");
    }
}

console.log(peter);
peter.lema();

//FUNCION CONSTRUCTORA

function Peter (nombre, apodo ) {
    this.nombre = nombre;
    this.apodo = apodo;
}
    Peter.prototype.lema = function ( ) {
        console.log(`El hombre mas pendejo del mundo es ${this.nombre} conocido com el ${this.apodo}`);
    }

    const araña = new Peter("Peter Parker", "Hombre araña");

    console.log(araña);
    araña.lema();

                                                                console.warn('EJERCICIO N° 4');

const verde = {
    nombre: "Bruce banan",
    apodo: "hulk",
    molesto() {
        console.log("Siempre estoy molesto y verde");
    }
}

function Hulk ( nombre, apodo ) {
    this.nombre = nombre; 
    this.apodo  = apodo;
}

Hulk.prototype.molesto = function () {
    console.log(`Yo ${this.nombre} tuve un accidente en un laboratorio y me converti en ${this.apodo}`);
}

const banan = new Hulk("Bruce banan", "Hulk");

console.log(banan);
banan.molesto();

                                                                console.warn('EJERCICIO N° 5');

const Dios = {
    nombre: "JEHOVA",
    fuerza: "Infinita",
    vida() {
        console.log("El Dios viviente, solo hay un Dios en este universo que controla todo");
    }
}

function Jehova (nombre, fuerza ) {
    this.nombre = nombre;
    this.fuerza = fuerza;
}

Jehova.prototype.vida = function ( ) {
    console.log(`Mi confianza esta puesta en ${this.nombre}, por que sé que el tiene una fuerza y provision ${this.fuerza}`);
}

const todoPoderoso = new Jehova("JEHOVA", "Infinita");

console.log(todoPoderoso);
todoPoderoso.vida();

                                                                console.warn('EJERCICIO N° 6');

const renault = {
    modelo: "Alaska",
    año: 2022,
    motor: "2.0",
    precio: "140.000.000",
    gerente() {
        console.log("Adquiere este excelente vehiculo para tu trabajo y tu finca");
    }
}

function Tayrona (modelo, año, motor, precio ) {
    this.modelo = modelo;
    this.año = año;
    this.motor = motor;
    this.precio = precio;
}

Tayrona.prototype.gerente = function ( ) {
    console.log(`Mi papa compro una camioneta marca Reanult ${this.modelo} ${this.año} con un motor ${this.motor} a un precio de ${this.precio} millones de pesos.`);
}

const vehiculo = new Tayrona("Alaska", 2022, "2.0", "140.000.000");

console.log(vehiculo);
vehiculo.gerente();

