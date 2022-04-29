const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
} 
//control de flujo 

const formulario = document.querySelector("form");
console.log(formulario);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const nombreError = document.querySelector("#errorNombre")
const apellidoError = document.querySelector("#errorApellido")
const emailError = document.querySelector("#errorEmail")
const passwordError = document.querySelector("#errorPassword")
const telefonoError = document.querySelector("#errorTelefono")

//console.log(telefonoError);


const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false,

}


inputs.forEach((input)=>{
	//console.log(input);
	input.addEventListener("keyup", (e)=>{
		//console.log(e.target.name);
		switch (e.target.name) {
			case "nombre":
				//console.log(e.target.value);
				if (expresiones.nombre.test(e.target.value)) {
					//console.log("Nombre correcto");
					statusInf.nombre = true
					nombreError.textContent = ""
				}
				else{
					//console.log("nombre incorrecto");
					statusInf.nombre = false
					nombreError.textContent = "error"
				}
				//console.log(expresiones.nombre.test(e.target.value));
				break;
			case "apellido":
				if (expresiones.nombre.test(e.target.value)) {
					//console.log("Apellido correcto");
					statusInf.apellido = true
					apellidoError.textContent = ""
				}
				else{
					//console.log("Apellido incorrecto");
					statusInf.apellido = false
					apellidoError.textContent = "Error"
				}
				//console.log(e.target.value);
				break;
			case "email":
				if (expresiones.email.test(e.target.value)) {
					//console.log("Email correcto");
					statusInf.email = true
					emailError.textContent = ""
				}
				else{
					//console.log("Email incorrecto");
					statusInf.email = false
					emailError.textContent = "Error"
				}
				//console.log(e.target.value);
				break;
			case "password":
				if (expresiones.password.test(e.target.value)) {
					//console.log("Password correcto");
					statusInf.password = true
					passwordError.textContent = ""
				}
				else{
					//console.log("Password incorrecto");
					statusInf.password = false;
					passwordError.textContent = "Error";
				}	
				//console.log(e.target.value);
				break;
			case "telefono":
				if (expresiones.password.test(e.target.value)) {
					//console.log("Telefono correcto");
					statusInf.telefono = true;
					telefonoError.textContent = "";
				}
				else{
					//console.log("Telefono incorrecto");
					statusInf.telefono = false;
					telefonoError.textContent = "Error";
				}	
				//console.log(e.target.value);
				break;
		}

	});

});


formulario.addEventListener("submit",(e)=>{
	e.preventDefault(); //evita recargar la pagina
	//console.log(Object.values(statusInf));
	//console.log(Object.values(statusInf).includes(false));
	const check = document.querySelector("#terminos").checked
	//console.log(check);
	if (!Object.values(statusInf).includes(false)) {
		//console.log("Enviado");
		document.querySelector(".alert-danger").style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos) //recupera datos del formulario
		formulario.reset() //si funciona resetea el formulario
	}
	else{
		//console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block"
	}
	
})