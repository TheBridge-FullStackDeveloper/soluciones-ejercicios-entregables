
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min)

async function getUserAsync() 
{
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomArbitrary(1, 901)}`);
    let data = await response.json()
    const { name, sprites } = data;
    const { back_default, front_default} = sprites;
    const contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = `<h1>${name}</h1>
                            <div class = "colocar">
                            <img src="${back_default}" width="200" height="300">
                            <img src="${front_default}" width="200" height="300">
                            </div>`
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

getUserAsync()