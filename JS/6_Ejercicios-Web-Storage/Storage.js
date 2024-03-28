// --- Ejercicios ---
const boton = document.getElementById("boton");
let parrafo = document.createElement('p')


function onSubmit(e) {
  e.preventDefault();
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  const objeto = { nombre, email, mensaje };
  localStorage.setItem("user", JSON.stringify(objeto));

  parrafo.innerText = ""//limpiamos lo que había escrito en el DOM
  pintarPantalla()
}
function pintarPantalla (){
  document.body.appendChild(parrafo)
  const user = JSON.parse(localStorage.getItem("user"));
  parrafo.innerText = 'Nombre: '+user.nombre +' Correo: '+ user.email +' Mensaje: '+user.mensaje
}
boton.addEventListener("click", onSubmit);


//EXTRA
// Guardar en LocalStorage todos los usuarios
// boton.addEventListener("click", function (e) {
//   e.preventDefault();

//   let misObjetos = JSON.parse(localStorage.getItem("formulario")) || [];

//   const nombre = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const mensaje = document.getElementById("message").value;

//   const objeto = { nombre, email, mensaje };

//   misObjetos.push(objeto);

//   localStorage.setItem("formulario", JSON.stringify(misObjetos));
//   contenedor.innerHTML = ``;
//   pintarEnPantalla();
// });

// Pintar en Pantalla lo guardado en LocalStorage
// const pintarEnPantalla = function () {
//   const contenedor = document.getElementById("contenedor");
//   const formulario = JSON.parse(localStorage.getItem("formulario"));

//   if (formulario === null || formulario.length === 0) {
//     contenedor.innerHTML = `<p>Es nulo compañero</p>`;
//   } else {
//     for (const elemento of formulario) {
//       contenedor.innerHTML += `<p>Mi nombre es ${elemento.nombre}, mi email es ${elemento.email} y he escrito este mensaje ${elemento.mensaje} <button onclick = "deleteOne('${elemento.email}')">Borrar elemento</button></p>`;
//     }
//   }
// };

// pintarEnPantalla();

// // Botón borrar todo el LocalStorage
// function deleteAll() {
//   localStorage.clear();
// }

// // Botón borrar solo un elemento
// function deleteOne(laclave) {
//   let nuevo = JSON.parse(localStorage.getItem("formulario"));

//   let filtrado = [];
//   for (elemento of nuevo) {
//     if (elemento.email !== laclave) {
//       filtrado.push(elemento);
//     }
//   }

//   localStorage.setItem("formulario", JSON.stringify(filtrado));
//   contenedor.innerHTML = ``;
//   pintarEnPantalla();
// }
