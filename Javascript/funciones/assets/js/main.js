//Funciones, nos permiten reutilzar codigo 
//` ${}  ` plantillas literales sirven para concatenar operaciones o resultados de operaciones, condicionales y ...
//${} Es para insertar código JS dentro del string
// para llamar una funcion solo debes poner el nombre de la funcion 

function saludar(nombre = "pedro", apellido = ""){
    //let nombre = true
    //string normal 
    //console.log('hola mi nombre es:', nombre, apellido);
    // templates strings || plantillas literales reconoce espacios y saltos de linea
    //console.log(`hola mi nombre es ${nombre?"Eduardo":"desconocido"}`);
    return `Mi nombre es ${nombre} ${apellido}`
}
` `
saludar("pedro", "Perez"); //invocación o llamada de la función 
// las variables se sobreescriben si es que se agregan valores.

let funcionSaludar = saludar('Felipe', 'Maqueda')
console.log(funcionSaludar);

console.log(saludar('alberto', 'hernandez'));

//es mala practicac colocar codigo html en js solo es ejemplo para string templates 
/* document.write('<h1>Esto es un H1</h1>')
console.log('<h1>Esto es un H1</h1>');
console.log(`<h1>Esto es un H1</h1>`); */

//se puede insertar en template string
/*
if(){
    codigo
}else{
    otro codigo
}
*/ 


/*Funcion declarada
Se puede invocar la funcion antes o despues de crearla */

function suma(a,b){
    return a + b;
}

console.log(suma(10,20));




/* Función expresadas | función expresión
no se puede accesar antes de inicializarse o antes de ser creada (hoisting) */

const resta = function(a, b){
    return a - b;
}

console.log(resta (30,10));

//callback funcion que sirve como parametro 

setTimeout(()=>{

})


//función flecha no se pued invocar antes de ser creada es la mas utilizada

/* const multiplicacion = (a,b) => {
    return a * b;
} */

const multiplicacion = (a,b) => a * b;

console.log(multiplicacion(40,200));