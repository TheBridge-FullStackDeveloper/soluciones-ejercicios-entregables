console.log("-----------------------------------------");
console.log(document.title);
console.log("-----------------------------------------");

// Ejercicio 1
// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const generasion = document.getElementById("gen-1");
generasion.innerText = "Generasión 1 Pokimon";

// Ejercicio 2
// Cambia el color de fondo de la primera generación de Pokimon.
const generasion1 =
  generasion.nextElementSibling.querySelectorAll(".infocard-lg-img");
for (let i = 0; i < generasion1.length; i++) {
  generasion1[i].style.background = "yellow";
}

// Ejercicio 3
// Imprime por consola la URL de la página.
const url = document.URL;
console.log("Url:", url);

// Ejercicio 4
// Imprime por consola el dominio de la página.
const dominio = document.domain;
console.log("Dominio:", dominio);

// Ejercicio 5
// Imprime todos los nodos de imagen.
const imagenes = document.images;
let img = document.getElementsByTagName("img");
console.log("Imagenes:", imagenes);

// Ejercicio 6
// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let i = 0; i < img.length; i++) {
  img[i].setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
}

// Ejercicio 7
// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
let voladores = document.getElementsByClassName("itype flying");
for (const volador of voladores) {
  const elementoPadre = volador.parentElement.parentElement;
  if (
    elementoPadre.classList[0] === "infocard-lg-data" &&
    elementoPadre.classList[1] === "text-muted"
  ) {
    elementoPadre.style.backgroundColor = "green";
  }
}
