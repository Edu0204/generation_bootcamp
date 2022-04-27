const santiago = {
    nombreCompleto: {
        nombre:"carlos",
        apellido:"cruz",
    },
    edad: 29,
    pasatiempos: ["futbol", "estudiar", "anime"],    
}

const Luis = {
    nombreCompleto: {
        nombre: "Luis",
        apellido: "García",
    },
    edad: 23,
    pasatiempos: ["series", "ejercicio", "dormir"],
};

const Donovan = {
    nombreCompleto: {
        nombre: "Donovan",
        apellido: "Martinez"
    },
    edad: 24,
    pasatiempos: ["futbol","Lectura","anime"]
}
    
const gabriel = {
    nombreCompleto: {
        nombre: "ganriel",
        apellido: "gonzalez"
    },
    edad: 20,
    pasatiempos: ["jugar","salir","correr"],
}

const Sesai = {
    nombreCompleto :{
        nombre: "Sesai",
        apellido: "Cazares",
    },
    edad: 25,
    pasatiempos: ["fotografia","caminar","dibujar"],
}

const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
}

const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"]
}


const cohorte12 = [santiago,Luis,Donovan,gabriel,Sesai,Abi,Jonathan]


for(let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.includes("anime")){
        console.log(cohorte12[i].nombreCompleto.nombre);
    }
}
       