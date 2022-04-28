/*Ciclos */

//for
//for ...in
//.forEach

//Imprimir la frase "hola mundo"
//cuerpo de For(inicializamos la variable ; condicion que evaluaremos ; modificador del contador)

/* for (let i = 0; i < 10; i++) {
    console.log("hola mundo", i);
    debugger;
} */

//iteración = una vuelta a cada ciclo 
//la variables solo viven dentro del ciclo for 

//While

/* let control = 1; //es igual que i variable de control
while (control <= 5) { //condicion a observar
    console.log("hola desde un ciclo while");

    control++; //modificador de la variable o contador
} */

//do...while se ejecuta por lo menos una vez antes de evaluar la condicion

let i = 1;

do {
    console.log("hola desde un do..while", i);
    i++;
} while (i <= 5);



