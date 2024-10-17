// Dados 2 variables booleanas:

const booleano1 = true;
const booleano2 = false;

// 1. Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

const booleanoAnd = booleano1 && booleano2;
console.log("Ejercicio 1: ", booleanoAnd);

// 2. Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2

const booleanoOr = booleano1 || booleano2;
console.log("Ejercicio 2: ", booleanoOr);

// 3. Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1

const booleanoNot = !booleano1;
console.log("Ejercicio 3: ", booleanoNot);

// 4. Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

const booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log("Ejercicio 4: ", booleanoMix0);

// 5. Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

const valorDivisión = 17 / 3;
console.log("Ejercicio 5: ", valorDivisión.toFixed(2));

// 6. Crear variable valorResto cuyo valor sea el resto de 17 entre 7

const valorResto = 17 % 7;
console.log("Ejercicio 6: ", valorResto);

// 7. Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const A = 9;
const B = "9";

if (A == B) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}

if (A === B) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}

console.log(
  "Ejercicio 7: ",
  "El triple igual además de comparar el valor del dato, también compara el tipo de dato"
);

// 8. Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

let mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mochila.length);

// If Else

if (mochila.length > 10) {
  console.log("Ejercicio 8: ", "No puedo cargar con tantas cosas");
} else if (mochila.length >= 2 && mochila.length <= 10) {
  console.log("Ejercicio 8: ", "Que bien voy con mi mochila");
} else {
  console.log("Ejercicio 8: ", "Creo que no necesito una mochila");
}

mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Switch

switch (true) {
  case mochila.length > 10:
    console.log("Ejercicio 8: ", "No puedo cargar con tantas cosas");
    break;
  case mochila.length >= 2 && mochila.length <= 10:
    console.log("Ejercicio 8: ", "Que bien voy con mi mochila");
    break;
  default:
    console.log("Ejercicio 8: ", "Creo que no necesito una mochila");
    break;
}

// 9. Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

for (let contarHasta10 = 0; contarHasta10 < 11; contarHasta10++) {
  if (contarHasta10 === 10) {
    console.log("Ejercicio 9: ", "He llegado hasta 10");
  }
  console.log(contarHasta10);
}

// 10. Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

const diaFestivo = true;

const vacaciones = diaFestivo === true ? "Hoy no hay trabajo" : "Hoy trabajo";
console.log("Ejercicio 10: ", vacaciones);

// 11. Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = [];

for (let i = 4; i < 19; i++) {
  arrayBucle.push(i);
}
console.log("Ejercicio 11: ", arrayBucle);

// 12. Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++) {
  resultado += arrayBucle[i];
}
console.log("Ejercicio 12: ", resultado);

// 13. Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

let arrayAprendiendo = ["Con", "Sofia", "aprendiendo", "bucles"];

for (let elemento1 of arrayAprendiendo) {
  console.log("Ejercicio 13: ", elemento1);
}

for (let elemento2 in arrayAprendiendo) {
  console.log("Ejercicio 13: ", arrayAprendiendo[elemento2]);
}

// 14. Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let j = 0;

while (j <= 20) {
  if (j % 3 == 0) {
    console.log("Ejercicio 14: ", "Patata");
  }
  j++;
}

// EXTRA
//* Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//* Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
let tieneCuatro = [];

for (let persona of gente) {
  if (persona.nombre.length === 4) {
    tieneCuatro.push(persona);
  }
}

console.log(tieneCuatro);

//* Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
let conJyCuarenta = [];

for (let persona of gente) {
  if (persona.nombre[0] === "J" && persona.edad < 40) {
    conJyCuarenta.push(persona);
  }
}

console.log(conJyCuarenta);

//* Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
let ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["mouse", "touchPad"],
  almacenamiento: {
    discos: ["SSD", "HDD"],
    maestro: 0,
  },
};

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
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
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//* Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
let arr = [
    {name: "pepito", age: 25},
    {name: "pepito", age: 60},
    {name: "Jose", age: 35}
  ]; 
// TEST 1
 if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }