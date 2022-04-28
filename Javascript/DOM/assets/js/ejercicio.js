/*este es un nodo de comentrio */
/* variable con simbolo $ refiere a etiqueta HTML */

const $card = document.querySelector('.card')
const $form = document.querySelector('form')
console.log($form);

$form.addEventListener('submit', (e) => {
    console.log("hola");
    e.preventDefault()
    
    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    //console.log(datos.url);
    crearElemento(datos.url, datos.texto);
    $form.reset();
});



function crearElemento(url, texto) {
    const img = document.createElement('img');
    const txt = document.createElement('figcaption');
    img.src = url;
    img.alt = texto;

    txt.textContent = texto;
 
    //apendChild - permite agregar etiquetas al documento
    $card.appendChild(img);
    $card.appendChild(txt)

}
