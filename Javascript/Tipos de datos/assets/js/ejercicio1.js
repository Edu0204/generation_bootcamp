/* prompt("¿Cual es tu año de nacimiento?")

let edad = prompt("¿Cual es tu año de nacimiento?")

console.log(edad); */


/* let año = prompt ("¿Cual es tu año de nacimiento?");

let edad = 2022 - año;

console.log("tu edad es " + edad + " años");
 */

/* const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento:"));
const anioActual = 2022;
console.log(anioNacimiento);

console.log('Tienes ${anioActual - anioNacimiento}  años'); */

/*Nivel 2 */

/* Opcion 1 */
/* const anioActual = 2022;


function calcularEdad(){
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento.value);
    console.log('Tienes ${anioActual - anioNacimiento} años');
}
*/

/* Opción 2 */

/*const boton = document.getElementById("calcular")
console.log(boton);

boton.addEventListener("click", () =>{
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    console.log('Tienes ${anioActual - anioNacimiento} años');
})
*/

/* Nivel 3 */

/* Objeto de tipo fecha */
const fecha = new Date()
const anioActual = fecha.getFullYear

const mesActual = fecha.getMonth

const diaActual = fecha.getDate

/* const anioActual = 2022
const mesActual = 4
const diaActual = 27  */


function mostrarDatos(){
    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimientoDividido = nacimiento.split("-") /* lo que esta dentro del parentesis lo elimina o toma ese valor para dividir */
    console.log(nacimientoDividido);
    const anioNacimiento = parseInt(nacimientoDividido[0])
    const mesNacimiento = parseInt(nacimientoDividido[1])
    const diaNacimiento = parseInt(nacimientoDividido[2])
    console.log(anioNacimiento, mesNacimiento, diaNacimiento);

    if( mesNacimiento <= mesActual && diaNacimiento <= diaActual ){
        console.log('Tienes ${anioActual - anioNacimiento} años');
    }
    else{
        console.log('Tienes ${anioActual - anioNacimiento - 1} años');
    }
}