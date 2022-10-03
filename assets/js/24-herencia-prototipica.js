                                                                console.warn('EJERCICIO N° 1'); //JHON MIRCHA
   

    function Animal ( nombre, genero ) {
        //Atributos
        this.nombre = nombre;
        this.genero = genero;
    }
    
        //Metodos agregados al prototipo de la funcion constructora 
            Animal.prototype.sonar = function (){
                console.log("Hago sonidos por que estoy vivo");
            }   
            Animal.prototype.saludar = function () {
                console.log(`hola me llamo ${this.nombre}`);
            }

            //HERENCIA PROTOTIPICA.

            function Perro (nombre, genero, tamaño ) {
                this.super = Animal;
                this.super(nombre, genero);
                this.tamaño = tamaño;
            }

            //PERRO ESTA HEREDANDO DE LA FUNCION ANIMAL
            Perro.prototype = new Animal();
            Perro.prototype.constructor = Perro;

            //Sobrescritura de metodo del prototipo padre en el hijo

            Perro.prototype.sonar = function ( ){ 
                console.log("Soy un perro y mi sonido es un ladrido");
            }

            Perro.prototype.ladrar = function () {
                console.log("guau guau");
            }     

     const  popeye = new Perro("popeye", "Macho", "mediano"),
     oliva = new Animal ("oliva", "Femenino");

     console.log(popeye);
     console.log(oliva);

     popeye.sonar();
     popeye.saludar();
     popeye.ladrar();

     oliva.sonar();
     oliva.saludar();

                                                                console.warn('EJERCICIO N° 2');

//Aca creamos el objeto
const tony = {
    nombre: "Tony Star",
    apodo: "Iron Man",
        egocentrico() {
        console.log("Yo soy Iron Man");
    } 
}

//Creamos la funcion con sus respectivas propiedades y atributos
function Marvel (nombre, poder, ) {
    this.nombre = nombre;
    this.poder = poder;
}

// Metodo agregados a al prototipo de la funcion construtora
Marvel.prototype.nick = function( ) {
    console.log("A nick fury nadien le cuelga el cellphone 📞");
}

//HERENCIA PROTOTIPICA
function Doctor (nombre, poder, apodo) {
this.muestra = Marvel;
this.muestra(nombre, poder);
this.apodo = apodo;
}

//Doctor esta heredando la funcion Marvel.
Doctor.prototype = new Marvel();
Doctor.prototype.constructor = Doctor;

//Sobrescritura de metodo del prototipo padre en el hijo
Doctor.prototype.nick = function ( ) {
    console.log("A nick fury le hace falta un ojo");
}

const iron = new Doctor("Tony Star", "Mark-19 ", "Iron Man");

console.log(tony);
console.log(iron);
iron.muestra();
iron.nick();
// iron.egocentrico();

                                                                console.warn('EJERCICIO N° 3 ');

const hijo1 = {
    nombre: "Jose Jhoel",
    apellido: "Gonzalez Natera",
    edad: 6,
    fortaleza() {
        console.log("Mi hijo es bueno con la lectura y los numeros.");
    }
}

function Flaco (nombre, apellido,  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = this.edad;
}

hijo1.fortaleza();

Flaco.prototype.niño = function () {
    console.log("A mi hijo tambien le gusta mucho los video juegos");
}

function Mayor (nombre, apellido, edad, oficio) {
    this.apodo = Flaco;
    this.apodo(nombre, apellido, edad );
    this.oficio = oficio;
}

Mayor.prototype = new Flaco();
Mayor.prototype.constructor = Mayor;

Mayor.prototype.niño = function ( ) {
    console.log(`A mi hijo ${this.nombre} ${this.apellido} le gusta ir a la iglesia`);
}

const pollo = new Mayor("Jose Jhoel", "Gonzalez", 6, "Cabeza de pollo");

console.log(pollo);
pollo.niño();
// pollo.apodo();

                                                                console.warn('EJERCICIO N° 4 ');

const hijo2 = {
    nombre: "Luciana",
    apellido: "Gonzalez Natera",
    edad: 4,
    virtud() {
        console.log("A la niña le gusta danzar para Dios");
    }
}

function Uchi ( nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

console.log(hijo2);

Uchi.prototype.niña= function () {
    console.log("A mi hija le gusta jugar con su papá");
}

function Segunda ( nombre, apellido, edad, gustos) {
this.danza = Uchi;
this.danza( nombre, apellido, edad, gustos);
this.gustos = gustos; 
}

Segunda.prototype = new Uchi;
Segunda.prototype.constructor = Segunda;

Segunda.prototype.niña = function ( ) {
    console.log(`${this.nombre} ${this.apellido} es la niña mas hermosa de este mundo.`);
}

const uchistiki = new Segunda("Luciana", "Gonzalez", 4, "Uvas rojas");

console.log(uchistiki);
uchistiki.niña();

                                                                console.warn('EJERCICIO N° 5');

const hijo3 = {
    nombre: "Elias Jose",
    apellido: "Gonzalez Baldiris",
    edad: 3,
    deporte() {
        console.log("Elias es boxeador y muy fuerte");
    }
}

function Pescaito (nombre, apellido, edad ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

console.log(hijo3);
hijo3.deporte();

Pescaito.prototype.niño3 = function ( ) {
    console.log("Elias jose es cartagenero");
}

function Tercero (nombre, apellido, edad, direccion ) {
    this.colegio = Pescaito;
    this.colegio(nombre, apellido, edad,);
    this.direccion = direccion;
}

Tercero.prototype = new Pescaito;
Tercero.prototype.constructor = Tercero;

Tercero.prototype.niño3 = function ( ) {
    console.log(`${this.nombre} ${this.apellido} vive en la ${this.direccion} y tiene ${this.edad} años.`);
}

const baldiris = new Tercero("Elias J", "Gonzalez Baldiris", 3, "Boquilla");

console.log(baldiris);
baldiris.niño3();

                                                                console.warn('EJERCICIO N° 6 ');

const elizabeth = {
    nombre: "Elizabeth",
    edad: 25,
    profesion() {
        console.log("Comunicadora social");
    }
}

function Yelitza ( nombre, edad, ) {
    this.nombre = nombre;
    this.edad = edad;
}

console.log(elizabeth);
elizabeth.profesion();

Yelitza.prototype.hermana = function ( ) {
    console.log(`${this.nombre} es mi hermana menor`);
}

function Piyu ( nombre, edad, puesto,) {
    this.ultima = Yelitza;
    this.ultima(nombre, edad,);
    this.puesto = puesto;
}

Piyu.prototype = new Yelitza;
Piyu.prototype.constructor = Piyu;

Piyu.prototype.hermana = function ( ) {
    console.log(`${this.nombre} tiene ${this.edad} años y es la ${this.puesto} de la familia Gonzalez Castellanos`);
}

const pancho = new Piyu("Elizabeth", 25, "menor");

console.log(pancho);
pancho.hermana();



    
