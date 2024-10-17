// Ejercicio 1
// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const enlaces = document.querySelectorAll("a");
function skipByDefault(e) {
  e.preventDefault();
}
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", skipByDefault);
}

// Ejercicio 2
// Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const imagenes = document.getElementsByTagName("img");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function () {
    imagenes[i].setAttribute("src", `./assets/${getRandom(gifs)}`);
  });
}
// Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("click", function () {
    parrafos[i].style.background = getRandom(misColores);
    parrafos[i].style.color = "red";
  });
}
// Bloques de article o section: Cambia el color de fondo.
const articulos = document.querySelectorAll("article");
for (let i = 0; i < articulos.length; i++) {
  articulos[i].addEventListener("click", function () {
    articulos[i].style.background = "black";
  });
}

// Ejercicio 3
// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// Imágenes: Cambia la imagen por el gif abracadabra.gif.
let valores = [];
for (let i = 0; i < imagenes.length; i++) {
  valores.push(imagenes[i].src);
}

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseover", function () {
    imagenes[i].setAttribute("src", "./assets/abracadabra.gif");
  });
}
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseout", function () {
    imagenes[i].setAttribute("src", valores[i]);
  });
}
// Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("mouseover", function () {
    parrafos[i].style.background = "orange";
    parrafos[i].style.color = "black";
  });
}
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("mouseout", function () {
    parrafos[i].style.background = "white";
    parrafos[i].style.color = "black";
  });
}
// Bloques de article o section: Color de fondo distinto al de párrafo.
for (let i = 0; i < articulos.length; i++) {
  articulos[i].addEventListener("mouseover", function () {
    articulos[i].style.background = "red";
  });
}
for (let i = 0; i < articulos.length; i++) {
  articulos[i].addEventListener("mouseout", function () {
    articulos[i].style.background = "blue";
  });
}

// Ejercicio Premium
// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
// Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
const colors = ["red", "blue", "green"];
const misColores = ["#000000", "#14213d", "#fca311", "#e5e5e5", "#ffffff"];
const gifs = [
  "abracadabra.gif",
  "magic-1.gif",
  "magic-2.gif",
  "magic-3.gif",
  "magic-4.gif",
  "magic-5.gif",
  "magic-6.gif",
];

function getRandom(array) {
  let aleatorio = Math.floor(Math.random() * array.length);

  return array[aleatorio];
}
