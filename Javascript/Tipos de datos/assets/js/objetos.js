/* formas de utilizar string con la palabra reservada new se crea un bjeto o con {} */

const nombre = "Eduardo";
const nombre2 = new String("jose"); /* objeto forma antigua poco utlizada */

console.log(nombre);
console.log(nombre2);

const persona = new Object();
persona.nombre = "Eduardo"
persona.apellido = "Osorio"
persona.edad = "29"

console.log(persona);

const nuevaPersona = {
   /* atributos o propiedades*/
    nombreCompleto: {
        nombre: "Eduardo",
        apellido: "Osorio"
    },
    edad: 29,
    pasatiempos: ["animes", "ejercicio", "arquitectura"],
    tieneTrabajo: false,
    /*metodo ya que necesita llaves*/
    saludar: function (){
        console.log("hola");
    },
    sumar: function (n1,n2) {
        console.log('El resultado de la suma es ${n1 + n2}');
    }
}
"hola".length; /* atributo o propiedad */
"hola".toLocaleLowerCase(); /* metodo */

nuevaPersona.sumar(5,10)
nuevaPersona.saludar(); /* metodo */

/* Formas de acceder a un objeto */
console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre); 
console.log(nuevaPersona.pasatiempos[1]); /* Arreglo */


/* Para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona);

/* agregar nuevo atributo */
nuevaPersona.colorFavorito = "Verde"
console.log(nuevaPersona.colorFavorito);

console.log(nuevaPersona.hasOwnProperty("edad"));

console.log(object.keys(nuevaPersona));
console.log(object.values(nuevaPersona));

const Eduardo = {
     nombreCompleto: {
         nombre: "Eduardo",
         apellido: "Osorio"
     },
     edad: 29,
     pasatiempos: ["animes", "ejercicio", "arquitectura"],
     }