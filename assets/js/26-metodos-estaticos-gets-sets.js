                                                                console.warn('EJERCICIO N° 1');



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
        this.raza = null;
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("guauuuuuu guauuuu");
    }

    /* Un metodo estatico se puede ejecutar sin
necesidad de instanciar la clase
*/
   static queEres(){
            console.log("un perro guardian que protege a las personas");
        };

/* los setters y getters son metodos especiales que nos permiten establecer 
y obtener los valores de atributos de nuestra clase
*/

get getRaza() {
    return this.raza;
}

set setRaza(raza) {
    this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal("mimi", "hembra"),
        camilin = new Perro("Camilin", "Macho", "Mediano");

        console.log(mimi);
        mimi.saludar();
        mimi.sonar();
        
        console.log(camilin);
        camilin.saludar();
        camilin.sonar();
        camilin.ladrar();
        console.log(camilin.getRaza);
        camilin.setRaza = "Chandoso"
        console.log(camilin.getRaza);

                                                                console.warn('EJERCICIO N° 2 ');

class Prueba1 {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    estudiar() {
        console.log(`${this.nombre} estudia todas las tardes en casa`);
    }

    jugar(){
        console.log(`Mi hijo ${this.nombre} juega Ps4 despues de estudiar`);
    }

}

class Jose extends Prueba1 {

    constructor( nombre, edad, juego) {
        super(nombre, edad);
        this.juego = juego;
        this.deporte = null;
    }

    comida(){
        console.log(`La comida favorita de ${this.nombre} es la carne molida`);
    }

    ps4(){
        console.log(`El juego de Ps4 favorito de ${this.nombre} es ${this.juego} `);
    }

    static molesta () {
        console.log(`A mi hijo ${this.nombre} le molesta levantarse temprano`);
    };

    get getDeporte() {
        return this.deporte;
    }

    set setDeporte(deporte) {
        this.deporte = deporte;
    }
}

Jose.molesta();

const hijo1 = new Jose("Jose Jhoel Gonzalez", 6, "GtaV");

console.log(hijo1);
hijo1.comida();
hijo1.ps4();
console.log(hijo1.getDeporte);
hijo1.setDeporte = "Jugar futbol";
console.log(hijo1.getDeporte);
Jose.molesta();

                                                                console.warn('EJERCICIO N° 3 ');

class Prueba2 {

    constructor ( nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = null;
    }

    miNegra(){
        console.log(`Mi hija ${this.nombre} es muy hermosa y mi princesa`);
    }
}

class Luci extends Prueba2 {

    constructor ( nombre, apellido, edad, ciudad ) {
        super(nombre, apellido, edad,);
        this.ciudad = ciudad;
    }

    hijo2() {
        console.log(`mi hija ${this.nombre} ${this.apellido} no fue al colegio el dia de hoy porque no teniamos dinero`);
    }

    static metodoPrueba(){
        console.log("Este es un metodo estatico de prueba");
    }

    get getTelefono() {
        return this.telefono;
    }

    set setTelefono(telefono) {
        this.telefono = telefono;
    }
}
Luci.metodoPrueba();

const uchi = new Luci("Luciana", "Gonzalez Natera", 6, "Malaga");

console.log(uchi);
// uchi.metodoPrueba();
uchi.hijo2();
console.log(uchi.getTelefono);
uchi.setTelefono = "3015302346";
console.log(uchi.getTelefono);

                                                                console.warn('EJERCICIO N° 4');

class Prueba3 {

    constructor( nombre, apellido, edad ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    ubicacion(){
        console.log(`${this.nombre} ${this.apellido} vive en la ciudad de Cartagena `);
    }
}

class Elias extends Prueba3 {

    constructor (nombre, apellido, edad, comida) {
        super(nombre, apellido, edad);
        this.comida = comida;
        this.heroe = null;
    }

        static madre() {
            console.log(`La señora madre de ${this.nombre} ${this.apellido} se llama Leidy Baldiris`);
        }

        get getHeroe() {
            return this.heroe;
        }

        set setHeroe(heroe) {
            this.heroe = heroe;
        }

        municipio(){
            console.log(`${this.nombre} vive en el municipio de la Boquilla en Cartagena `);
        }
}


const hijo3 = new Elias("Elias Jose", "Gonzalez Baldiris", 3, "Pescado Frito");

console.log(hijo3);
console.log(hijo3.getHeroe);
hijo3.setHeroe = "Spiderman";
console.log(hijo3);
hijo3.municipio();
hijo3.ubicacion();
Elias.madre();
console.log(hijo3.getHeroe);
hijo3.setHeroe = "Thor";
console.log(hijo3.getHeroe);
console.log(hijo3);











 


        