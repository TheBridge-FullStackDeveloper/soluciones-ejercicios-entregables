//*CONDICIONALESC Y OBJETOS/ARRAYS

// Crear el objeto ordenador
const ordenador = {
  marca: "Asus",
  modelo: "VivoBook S14",
  tipo: "portátil",
  procesador: {
    marca: "Intel",
    modelo: "Core i5",
    velocidad: "2.5 GHz",
  },
  almacenamiento: {
    discos: ["SSD", "HDD"],
    maestro: 0,
  },
  perifericos: {
    teclado: "español",
    touchpad: true,
    camara: false,
  },
};

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (ordenador.marca === "Asus") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos.touchpad === true) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 5
if (ordenador.almacenamiento.discos[0] === "SSD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (ordenador.procesador.velocidad === "2.5 GHz") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crear el objeto usuario
const usuario = {
  nombre: "María",
  apellido: "González",
  edad: 35,
  correo: "maria.gonzalez@gmail.com",
  direccion: {
    calle: "Calle Mayor",
    numero: 15,
    ciudad: "Madrid",
  },
  intereses: ["viajar", "cocinar", "leer"],
  trabajos: [
    {
      empresa: "Microsoft",
      cargo: "Desarrolladora",
      fechaInicio: "2015-06-01",
      fechaFin: "2019-08-31",
    },
    {
      empresa: "Google",
      cargo: "Gerente de proyecto",
      fechaInicio: "2019-09-01",
      fechaFin: null,
    },
  ],
};

// TEST 1
if (typeof usuario === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (usuario.nombre === "María") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (usuario.direccion.ciudad === "Madrid") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
if (usuario.intereses.includes("cocinar")) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 5
if (usuario.trabajos.length === 2) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (usuario.trabajos[1].empresa === "Google") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//*BUCLES
// Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++) {
  console.log(i);
}
// Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
// Dado un array de números, imprimir en la consola la suma de todos los números.

const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Dado un número, encontrar su factorial.

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120
// Dado un array de números, imprimir en la consola solo los números impares.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}
// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const people = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 17 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 20 },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].edad > 18) {
    console.log(people[i].nombre);
  }
}
// Dado un número, imprimir en la consola si es primo o no.

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(7)); // true
console.log(esPrimo(10));

// OTRA OPCIÓN

// Dado un número, imprimir en la consola si es primo o no.

let num = 8;
let num2 = num;
let resultado = "";
for (let index = 1; index < num; index++) {
  num2 -= 1;
  if (num % num2 == 0 && num2 != 1) {
    resultado = "no es primo";
    break;
  }
}

if (resultado == "no es primo") {
  console.log("no es primo");
} else {
  console.log("es primo");
}

// Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

// Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.

let felinosMayoresCuatroAnos = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Felino" && animales[i].edad > 4) {
    felinosMayoresCuatroAnos.push(animales[i]);
  }
}

console.log(felinosMayoresCuatroAnos);

let herbivoros = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Herbívoro") {
    herbivoros.push(animales[i]);
  }
}

console.log(herbivoros);

let animalesOmnivorosOAvesMenores3 = [];

for (let i = 0; i < animales.length; i++) {
  if (
    (animales[i].especie === "Omnívoro" || animales[i].especie === "Ave") &&
    animales[i].edad < 3
  ) {
    animalesOmnivorosOAvesMenores3.push(animales[i]);
  }
}

console.log(animalesOmnivorosOAvesMenores3);

let animalesEspecieH = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie.startsWith("H")) {
    animalesEspecieH.push(animales[i]);
  }
}

console.log(animalesEspecieH);

let animalesNombreLargoYFelinoHerbivoro = [];

for (let i = 0; i < animales.length; i++) {
  if (
    (animales[i].especie === "Felino" || animales[i].especie === "Herbívoro") &&
    animales[i].nombre.length > 4
  ) {
    animalesNombreLargoYFelinoHerbivoro.push(animales[i]);
  }
}

console.log(animalesNombreLargoYFelinoHerbivoro);

// Ejercicio: Eliminar duplicados de un array
// Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.

function eliminarDuplicados(array) {
  const nuevosElementos = [];

  for (const elemento of array) {
    if (!nuevosElementos.includes(elemento)) {
      nuevosElementos.push(elemento);
    }
  }

  return nuevosElementos;
}

eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]

// Ejercicio: Sumar elementos de un array
// Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
function sumarElementos(array) {
  let suma = 0;

  for (const elemento of array) {
    suma += elemento;
  }

  return suma;
}
sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15
sumarElementos([-5, 10, -15, 20]); // Devuelve 10

// Ejercicio: Contar la cantidad de caracteres de un array de cadenas
// Crea una función llamada contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.

contarCaracteres(["Hola", "Mundo"]); // Devuelve 8
contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 17

function contarCaracteres(array) {
  let cantidadCaracteres = 0;

  for (const cadena of array) {
    cantidadCaracteres += cadena.length;
  }

  return cantidadCaracteres;
}

//   Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
function numeroMasGrande(array) {
  let max = array[0];
  for (let num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
numeroMasGrande([10, -5, 20, -15]); // Devuelve 20

// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.
function cadenaMasLarga(array) {
  let cadenaLarga = array[0];
  for (let cadena of array) {
    if (cadena.length > cadenaLarga.length) {
      cadenaLarga = cadena;
    }
  }
  return cadenaLarga;
}
cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
