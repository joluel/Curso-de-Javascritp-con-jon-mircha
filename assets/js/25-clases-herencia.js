                                                                console.warn('EJERCICIO N° 1 '); //EJERCICIO CON JHON MIRCHA

class Animal {
    /*El constructor es un metodo especial
    que se ejecuta en el momento de instanciar
    la clase
    */
    constructor( nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    //METODOS
    sonar() {
        console.log("hola mundo");
    }

    saludar() {
        console.log("Creando segundo metodo dentro de la clase");
    }
}

class Perro  extends Animal {

    constructor( nombre, genero, tamaño) {
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamaño = tamaño;
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("guauuuuuu guauuuu");
    }
}

const mimi = new Animal("mimi", "hembra"),
        camilin = new Perro("Camilin", "Macho", "Mediano");

        console.log(mimi);
        mimi.saludar();
        mimi.sonar();
        
        console.log(camilin);
        camilin.saludar();
        camilin.sonar();
        camilin.ladrar();

                                                                console.warn('EJERCICIO N° 2 ');

class Prueba1 {

    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    profesion() {
        console.log("Mi profesion es ser developer junior y Oficial de Policia de Colombia");
    }

    estudios() {
        console.log("Tecnologo en mecanica, Administrador Policial, tecnico en sistemas");
    }
}

class Carlos extends Prueba1 {

    constructor ( nombre, apellido, telefono ) {
        super(nombre, apellido);
        this.telefono = telefono;

    } 

    profesion() {
        console.log("Campesino en malaga Santander");
    }

    aspiraciones(){ 
        console.log("Recuperar mi situacion economica y poder darle un bienestar a mis hijos");
    }
}

const    che = new Prueba1("Carlos Jose", "Gonzalez Castellanos"),
        jose = new Carlos("Jose Jhoel", "Gonzalez Natera", 3015393246);

        console.log(che);
        che.profesion();
        che.estudios();

        console.log(jose);
        jose.profesion();
        jose.aspiraciones();

                                                                console.warn('EJERCICIO N° 3 ');

class Prueba2 {

    constructor (marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo; 
        this.precio = precio;
    }

    tayrona() {
        console.log("Adquiere tu vehiculo nuevo sin cuotas mensuales");
    }

    sofasa() {
        console.log("Fabrica de los vehiculos marca Renault");
    }
}

class Renault extends Prueba2 {

    constructor ( marca, modelo, precio, año ) {
super(marca, modelo, precio);
this.año = año;
    }

    tayrona() {
        console.log(`Cambia tu ${this.marca} viejo por uno 0 kilometros `);
    }

    alaska() {
        console.log(`La ${this.marca} ${this.modelo} del año ${this.año} es el vehiculo apetecido por todo hombre trabajador`);
    }
}

const   vehiculo1 = new Prueba2("Renault", "Koleos", "130.000.000"),
        vehiculo2 = new Renault("Renault", "Alaska", "120.000.000", 2022 );

        console.log(vehiculo1);
        vehiculo1.tayrona();
        vehiculo1.sofasa();

        console.log(vehiculo2);
        vehiculo2.tayrona();
        vehiculo2.alaska();
        
                                                                console.warn('EJERCICIO N° 4');

class Prueba3 {

    constructor ( apodo, frase, poder) {
        this.apodo = apodo;
        this.frase = frase;
        this.poder = poder;
    }

    heroe() {
        console.log(`El ${this.apodo} es el heroe preferido de mi hijo jose y elias `);
    }

    marvel(){
        console.log(`La ${this.poder} es muy pegajosa`);
    }
}

class Araña extends Prueba3 {

    constructor( apodo, frase, poder, debilidad) {

        super(apodo, frase, poder);
        this.debilidad = debilidad;
    }

    amigo(){
        console.log(`Iron man es el mentor de ${this.apodo}`);
    }

    enemigo(){
        console.log(`El duende verde es el enemigo numero 1 del ${this.apodo}`);
    }
}

const   peter = new Prueba3("Spiderman", "Tu vecino el hombre araña", "Telaraña electrica"),
        parker = new Araña("Spiderman", "Te amo mery jeans", "Ataque furtivo", "Las mujeres");

        console.log(peter);
        peter.heroe();
        peter.marvel();

        console.log(parker);
        parker.amigo();
        parker.enemigo();

                                                                console.warn('EJERCICIO N° 5');

class Prueba4 {

    constructor (nombre, apodo, calificacion) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.calificacion = calificacion;
    }

    musica() {
        console.log(`El mejor cantante de vallenato es ${this.nombre}`);
    }

    vallenato() {
        console.log(`El apodo de ${this.nombre} es el ${this.apodo}`);
    }
}

class Diaz extends Prueba4 {

    constructor(nombre, apodo, calificacion, cancion) {

        super(nombre, apodo, calificacion);
        this.cancion = cancion;
    }

    disco(){
        console.log(`La mejor cancion de ${this.nombre} es ${this.cancion}`);
    }

    parranda(){
        console.log(`${this.nombre} tuvo una ${this.calificacion} calificacion en el genero del vallenato`);
    }
}

const   martin = new Prueba4("Diomedez Diaz", "El cacique de la junta", "Excelente", "Adios lunarcito"),
        santos = new Diaz("Diomedez Diaz", "El cacique de la junta", "Excelente", "Adios lunarcito");

        console.log(martin);
        martin.musica();
        martin.vallenato();

        console.log(santos);
        santos.disco();
        santos.parranda();
        
                                                                console.warn('EJERCICIO N° 6');

class Prueba5 {

    constructor (nombre, apodo, cancion ) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.cancion = cancion;
    }

    cancelada() {
        console.log(`${this.nombre} es mi cantante favorito en este genero de vallenato`);
    }

    problema(){
        console.log(`El apodo de ${this.nombre} es ${this.apodo}`);
    }
}

class Martin extends Prueba5 {

    constructor (nombre, apodo, cancion, estado) {
        super(nombre, apodo, cancion,);
        this.estado = estado;
    }

    veinte() { 
        console.log(`${this.nombre} estaba ${this.estado} con una mona ahi que no me acuerdo el nombre`);
    }

    temple(){
        console.log(`la mejor cancion de ${this.nombre} es ${this.cancion} `);
    }
}

const   rolando = new Prueba5("Martin Elias Diaz", "tin tin", "Sin ti no tengo nada"),
        ochoa = new Martin("Martin Elias", "Tin tin", "Cancelada de mi vida", "casado");

        console.log(rolando);
        rolando.cancelada();
        rolando.problema();

        console.log(ochoa);
        ochoa.veinte();
        ochoa.temple();
        
