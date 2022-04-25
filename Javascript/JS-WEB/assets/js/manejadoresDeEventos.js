
window.addEventListener ('load', function(){
    this.alert('Se ha terminado de cargar la pagina')
})

function saludar(){
    alert('hola');
}

/* Manejador de eventos semantico  (e) = evento*/

const $botonSemantico = document.getElementById('evento-semantico')

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento){
    //alert("Hola desde un manejador semantico")
    console.log(evento.target);
}


/* manejador de eventos multiple */

const $botonMultiple = document.getElementById("evento-multiple");

$botonMultiple.addEventListener('click', saludarMultiple);

$botonMultiple.addEventListener('click', function(e){
    console.log(e.target);
});

function saludarMultiple(){
    alert("hola desde manejador multiple");
}