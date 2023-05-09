const escuadras = document.getElementById("lista-escuadras");
const fragment = document.createDocumentFragment();

fetch('../json/escuadras2023.json')
  .then(response => response.json())
  .then(data => {
    
    for (datos of data) {
      
      const {numero,nombre,descripcion, enlaceImagen, altImagen} = datos;
      const div1 = document.createElement('div');
      const h2 = document.createElement('h2');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const div2 = document.createElement('div');
      const img = document.createElement('img');
      const div3 = document.createElement('div');

      div3.classList.add("escuadras");
      div2.classList.add("imagen");
      div1.classList.add("texto");


      h1.innerText = nombre;
      h2.innerText = `Escuadra ${numero}`;
      p.innerText = descripcion;
      img.src = enlaceImagen;
      img.alt = altImagen;

      div1.appendChild(h2);
      div1.appendChild(h1);
      div1.appendChild(p);
      div2.appendChild(img);
      div3.appendChild(div1);
      div3.appendChild(div2);
      fragment.appendChild(div3)


      console.log(img)
    }


    escuadras.appendChild(fragment);
  })
  .catch(error => {
    console.log("Error de carga")
  });

