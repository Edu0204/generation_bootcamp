//class (palabra reservada) permite crear objetos con nombre de la pimera letra en mayuscula
//constructor da atributos al objeto 
//Dentro del cuerpo class no se debe especificar que es una variable const, let, y var
//This nos ayuda que el constructor pueda acceder a las variables de la clase 


class Persona {
    //atributos
    #id = 0;
    static #contador = 0;
    #nombre =""; //variable privada con simbolo #
    #edad = 0;
    #correo = "";

    constructor(nombre, edad, correo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id = ++Persona.#contador;

    }
    
    // setters & getters (set y get) fijar y obtener 
     // se usan y llaman como atributos usan un punto .

     get getNombre(){
        return this.#nombre;
     }

     set setnombre(nombre){
        this.#nombre = nombre;
     }

     /* cambiarNombre(nombre){
         this.#nombre = nombre;
     } */


     get getEdad(){
         return this.edad
     }

     set setEdad(edad){
         this.#edad = edad;
     }

     get getCorreo(){
        return this.correo
    }

    set setCorreo(correo){
        this.#correo = correo;
    }

    // Metodo : Funcion dentro de una clase
    #saludar (){
        let mensaje = `Hola mi nombre es ${this.#nombre}`;
        return mensaje;
    }

    mostrarSaludo(){
        return this.#saludar();
    }

    static mostrarContador(){
        return Persona.#contador
    }
}

//instancia de la clase persona
const persona1 = new Persona ("Pedro", 30, "pedro@gmail.com");
const persona2 = new Persona ("gabriel", 25, "gabriel@gmail.com");
const persona3 = new Persona ("Martin", 40, "martin@gmailcom");

persona1.setCorreo = "lalo@gmail.com"
persona1.setEdad = 35
persona1.setnombre = "Jose"

/* persona1.cambiarNombre("Antonio") 
 */
console.log(persona1);
console.log(persona2);
console.log(persona3);


console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

//console.log(Persona.contador);
console.log(Persona.mostrarContador());
