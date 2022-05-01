// --- Ejercicios ---
const boton = document.getElementById('boton')

// Guardar en LocalStorage
boton.addEventListener('click', (e) => {
    e.preventDefault();

    let misObjetos = JSON.parse(localStorage.getItem('formulario')) || [];

    const nombre = document.getElementById('name').value
    const email = document.getElementById('email').value
    const mensaje = document.getElementById('message').value

    const objeto = {nombre, email, mensaje}

    misObjetos.push(objeto)

    localStorage.setItem('formulario', JSON.stringify(misObjetos));
    contenedor.innerHTML = ``
    pintarEnPantalla()

})

// Pintar en Pantalla lo guardado en LocalStorage
const pintarEnPantalla = () => {
    const contenedor = document.getElementById('contenedor')
    const formulario = JSON.parse(localStorage.getItem('formulario'));

    if (formulario === null || formulario.length === 0) {
    contenedor.innerHTML = `<p>Es nulo compañero</p>`
    } else {
    formulario.forEach ((elemento) => {
        contenedor.innerHTML += `<p>Mi nombre es ${elemento.nombre}, mi email es ${elemento.email} y he escrito este mensaje ${elemento.mensaje} <button onclick = "deleteOne('${elemento.email}')">Borrar elemento</button></p>`
    })
}
}

pintarEnPantalla()

// Botón borrar todo el LocalStorage
const deleteAll = () => {
    localStorage.clear()
}

// Botón borrar solo un elemento
const deleteOne = (laclave) => {

    let nuevo =  JSON.parse(localStorage.getItem('formulario'))
   
    let filtrado = []
    for (elemento of nuevo) {
        if (elemento.email !== laclave) {
            filtrado.push(elemento)
        }
    }

    // Otra posible solución 2
    // const filtrado = nuevo.filter(element => element.email !== laclave)

    localStorage.setItem('formulario', JSON.stringify(filtrado));
    contenedor.innerHTML = ``
    pintarEnPantalla()
}