const db = [
  {
    url: "https://placeimg.com/200/200/animals",
    title: "Animales",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "Tecnología",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/people",
    title: "Personas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/nature",
    title: "Natureleza",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur ducimus obcaecati hic!",
  },
  {
    url: "https://placeimg.com/200/200/arch",
    title: "Arquitectura",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing",
  },
];

console.log(db[0].url);

const $cards = document.getElementById("cards");
$cards.innerHTML = ""; // se hace esto para evitar en mal renderizado u undefinied

db.forEach((objeto) => {
  //console.log(objeto);
  $cards.innerHTML += `
    <div class="col mb-4">
    <div class="card">
      <img src="${objeto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text">${objeto.description}</p>
      </div>
    </div>
    </div>
    `;
}); //interpolacion = ${} 


//JSON
//stringify = convetir un objeto JSON a un string
//parse = convierte una cadena de texto a un objeto tipo JSON

const dbJSON = JSON.stringify(db);

console.log(dbJSON);

console.log(JSON.parse(dbJSON));

