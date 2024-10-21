// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:

const [, anita] = empleados;
console.log(anita);

// Extrae el email del empleado Luis --> Luis@gmail.com

const [empleadoLuis] = empleados;
const { email: correoLuis } = empleadoLuis;
console.log(correoLuis);

// Dado el siguiente objeto
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
const { name: nombre } = pokemon;
console.log(nombre);
// Extrae el tipo de Pokemon que es
const { type } = pokemon;
console.log(type);
// Extrae el movimiento “Tackle”
const { moves } = pokemon;
const [, tackel] = moves;
console.log(tackel);

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const newPokemon = {...pokemon, ...pikachu}
console.log(newPokemon)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...numeros) => {
  return numeros.reduce((prev, curr) => prev + curr);
};

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...parametros) => {
  const numbers = parametros.filter((e) => typeof e === "number");
  const result = numbers.reduce((a, b) => a + b);
  return result;
};

console.log(addOnlyNums(1, "perro", 2, 4));

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...params) => params.length;

console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (a, b) => {
  return [...a, ...b];
};

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));

//*Extras
// Usa la desestructuración para intercambiar los valores de a y b

let a = 5;
let b = 3;

[b, a] = [a, b];

console.log(a);
console.log(b);
// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...data) => {
  const filtro = data.filter((value, i) => data.indexOf(value) == i);
  return filtro;
};

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...combinados) => {
  return combinados.reduce((a, b) => [...a, ...b]);
};
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...data) => {
  const ope = data.map((num) => num ** 2).reduce((a, b) => a + b);
  return ope;
};

console.log(sumAndSquare(2, 2, 3));
