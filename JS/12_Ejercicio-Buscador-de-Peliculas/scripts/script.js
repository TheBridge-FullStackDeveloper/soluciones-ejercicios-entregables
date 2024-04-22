   //inicializo la array de géneros vacia hasta que me los traiga de la petición;
let genres = []
    //enlace de las películas
const searchMovieURL = 'https://api.themoviedb.org/3/search/movie?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de&language=es-ES&query='
    //enlace de los géneros de las películas
const genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de&language=en-US'
const form = document.getElementById('buscarForm') //aqui llamo al formulario

axios.get(genreURL) //axios para traerme los géneros
    .then(res => genres = res.data.genres)
    .catch(err => console.error(err))

//función para pintar las películas
const renderPeliculas = peliculas => {
    document.querySelector('.peliculas').innerHTML = '';
    peliculas.forEach(pelicula => {
        //código para sacar los géneros 1º filtro array de géneros por aquellos incluidos en la película y luego los mapeo para sacar sus names
        const peliculaGenres = genres.filter(genre => pelicula.genre_ids.includes(genre.id))
            .map(genre => genre.name)
        let genresH3 = '';
        //aquí concateno con un forEach cada género dentro de un h3
        peliculaGenres.forEach(genre => genresH3 += `<h3 class="genre"> ${genre} </h3>`);
            //condicional para evitar que me salga la imagen si es null
        const imagen = pelicula.poster_path ? `<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${pelicula.poster_path}"/>` : ''
            //llamo a peliculas para que me pinte los datos
        document.querySelector('.peliculas').innerHTML += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>${pelicula.original_title}</h1>
                <div class="genres">
                   <h5> ${peliculaGenres}</h5>
                </div>
                <span>${pelicula.overview}</span>
                <div class="card-img-top">
                ${imagen}
                </div>
                </div>   
            </div>
    `
    })
}

//función para que funcion para buscar las peliculas cuando hagamos 'submit'
form.addEventListener('submit', event => {
    event.preventDefault();
    const busqueda = event.target.buscar.value
    axios.get(searchMovieURL + busqueda)
        .then(res => {
            const peliculas = res.data.results;
            renderPeliculas(peliculas)
        })
})
