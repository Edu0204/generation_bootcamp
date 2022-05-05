const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById("imagenGatito")




async function Gato(){
    const infoGatitos = await fetch (url)
    const gatito = await infoGatitos.json();
    console.log(gatito);
    imagen.src = gatito[0].url 
} 


