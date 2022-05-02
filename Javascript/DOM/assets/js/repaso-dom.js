//Variables y constantes al inicio del documento para no llamarlas antes de crearlas

//agregar elementos en html desde js 


//forma 1 (manera correcta)
const $padre = document.querySelector('.padre');

/* # llamar un id
   . llamar una clase  */

const $parr = document.createElement('p'); // crea elemento con atributo

$parr.textContent += 'lorem ipsum'; // += concatena

$padre.appendChild($parr);

//forma 2 (manera mas usada)
// agregar elementos con innerHTML

const $cuadro = document.querySelector(".cuadro");
$cuadro.innerHTML = "";//inicializar el contenido del elemento

$cuadro.innerHTML = `
                    <a href="#">Este es un enlace</a>
                    <ol>
                        <li>Elemento1</li>
                        <li>Elemento2</li>
                        <li>Elemento3</li>
                    </ol>
                    `;


//ejemplo de uso 

const estaciones = ["primavera", "verano", "otoño", "invierno"];

const $lista = document.createElement("ul");

estaciones.forEach( estacion => {
    const $li = document.createElement('li');
    $li.textContent = estacion;
    $lista.appendChild($li);
});

document.body.appendChild($lista);



/////////////////////////////////////////
//otro ejemplo

// += concatenar, importante buscar su uso.

const continentes = ["Africa", "America","Asia", "Europa", "Oceania"]

const $ol = document.createElement("ol");
$cuadro.appendChild($ol);

continentes.forEach(continente => {$ol.innerHTML += `<li>${continente}</li>`});


