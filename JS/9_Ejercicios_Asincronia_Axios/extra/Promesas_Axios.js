// Ejercicio 1
// Todas las razas de perro
axios('https://dog.ceo/api/breeds/list/all')
            .then(datos=>console.log(datos.data.message))

// Imagen random de una raza
axios('https://dog.ceo/api/breeds/image/random')
            .then(datos=>console.log(datos.data.message))

// Todas las imágenes de una raza
axios(' https://dog.ceo/api/breed/kelpie/images')
            .then(datos=>console.log(datos.data.message))

// Adaptar la Url para poder pasarle argumentos
const pasarArgumento = (raza) => {
    axios(`https://dog.ceo/api/breed/${raza}/images`)
            .then(datos=> {     
                pintarHtml(datos.data)
            })
}
pasarArgumento ('african');

const pintarHtml = (datitos) => {
    const { message: imagen } = datitos;
    const ref = document.getElementById('contenedor');
    for (let img in imagen){
        ref.innerHTML += `<img src="${imagen[img]}" width="200" height="300">`
    }
}

// Ejercicio 2
const buscarUsuario = () => {

    const entrada = document.getElementById('entrada').value;

    axios(`https://api.github.com/users/${entrada}`)
            .then(datos=> {
                pintarHtml2 (datos.data);
            })

}

const pintarHtml2 = (datos) => {

    const { login, avatar_url, public_repos} = datos;

    const lista1 = document.getElementById('lista1');
    const lista2 = document.getElementById('lista2');
    const lista3 = document.getElementById('lista3');

    lista1.innerHTML = `Nombre: ${login}`;
    lista2.innerHTML = `Repositorios Públicos: ${public_repos}`;
    lista3.innerHTML = `<img src="${avatar_url}" width="400" height="300">`;

}

