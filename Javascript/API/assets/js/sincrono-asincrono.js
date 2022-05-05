
/* let tiempo = 5000
setTimeout(()=>{
    let datos = "Eduardo"
    console.log(datos);
},tiempo)



no bloquante
console.log("hola");
 */

//Promesas

const datos = [
    {
        nombre: "eduardo",
        edad: 29,
    },
    {
        nombre: "Saul",
        edad: 32,
    },
    {
        nombre: "Luis",
        edad: 18,
    },
];

function obtenerDatos() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(datos)
        }, 2000)
    })
}

// .then utilizado para obtener datos de una promesa (cuando se resuelva me das los datos)

/* primera forma de obtener los datos
obtenerDatos().then((datos) => {
    console.log(datos);
}); */

//asyn await =
async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
};

obtenerDatosAsync();




