//Metodo 1
/* 
function reverse(s) {
    return s.split("").reverse().join("");
  }
  
  var sss = reverse("Hola mundo");
  console.log(sss); */

//Metodo 2

const invertir = (palabra) => {
    //Validación
    if(palabra.length <=1 )return console.warn("no ingresaste texto");
    if (typeof(palabra) !== 'string') return console.error('el valor ingresado no es una palabra');

    let arreglo = palabra.split(""); //arreglo
    let reverso = arreglo.reverse(""); //reverso 
    let unir = reverso.join("");  //une de nuevo 
    console.log(unir);

}

invertir ("")