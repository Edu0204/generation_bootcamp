/*este es un nodo de comentrio */
/* variable con simbolo $ refiere a etiqueta HTML */

const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p');
const $card = document.querySelector('.card')

//nodename
console.log($parr.nodeName);
console.log($titulo.nodeName);

//textContent
console.log($parr.textContent);
$parr.textContent = "Hola mundo"
$titulo.textContent = 'modificando elementos con JavaScript'

//inneText - Mejor no usarla es de Internet Expolorer

//innerHTML - te premite agregar etiquetas de HTML y reemplaza solo lo incluido en el elemento seleccionado 

console.log($parr.innerHTML);

$parr.innerHTML = '<a href="#">Este es un enlace</a>';


//outerHTML - reemplaza todo el elemento seleccionado

//$parr.outerHTML = '<a href="#">Este es un enlace</a>';

console.log(document);

function crearElemento() {
    const img = document.createElement('img');
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"
 
    //apendChild - permite agregar etiquetas al documento
    $card.appendChild(img);
}

crearElemento();

