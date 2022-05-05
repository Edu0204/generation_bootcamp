const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
const $cont = document.getElementById('cont');


fetch(url)
.then(response => response.json())
.then(datos =>{
  datos.map((x)=>{
        const template = `
        <div class="col mb-4">
        <div class="card">
          <img src="${x.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        </div>
        `;
        $cont.innerHTML += template
        
      })
      // datos.message.terrier.map((tipoTerrier)=>{
      //   const template = `
      //   <div class="col mb-4">
      //     <div class="card">
      //     <img src="${}" class="card-img-top" alt="...">
      //       <div class="card-body">
      //       <h5 class="card-title">Card title</h5>
      //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      //       </div>
      //     </div>
      //   </div>`;
      //   cont.innerHTML += template;
      // })
});