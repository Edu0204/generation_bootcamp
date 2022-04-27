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



//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  
}
console.log(palindrome("oso"));


function palindromeChecker(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? "es palindromo" : "no es palindromo";
}

console.log(palindromeChecker("Eduardo")); // es palindromo


//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


function repetirTexto(texto, veces){
  let textoRepetido = "";
  for(let i = 0; i < veces; i++){
      textoRepetido += texto;
  }
  document.getElementById("res1").innerHTML = textoRepetido;
  return textoRepetido;
}
//agregar la funcion recortarTexto un boton
let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function(){
  let texto = document.getElementById("texto").value;
  let veces = document.getElementById("numVeces").value;
  repetirTexto(texto, veces);
});




//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"






//Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


