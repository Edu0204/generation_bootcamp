/* Algunas cosas que se pueden hacer con DOM*/

console.log(window.document);
console.log(document); // todo el documento
console.log(document.head);//Head de documento
console.log(document.body); //Body
console.log(document.documentElement);// todo HTML
console.log(document.doctype);// 
console.log(document.charset);// 
console.log(document.links);//
console.log(document.images);//
console.log(document.styleSheets);// documentos de CSS
console.log(document.scripts);// documentos script

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000);

document.write('hola mundo desde document write') // mala practica inserta en body de documento

document.write('<h1>hola mundo desde document write</h1>')