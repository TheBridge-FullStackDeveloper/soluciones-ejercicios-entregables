// 15. Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

let nota = prompt("Introduce un número entre 0 y 10");
switch (true) {
  case nota >= 0 && nota <= 4:
    console.log("Ejercicio 15: ", "Insuficiente");
    break;
  case nota >= 5 && nota <= 6:
    console.log("Ejercicio 15: ", "Suficiente");
    break;
  case nota >= 7 && nota <= 8:
    console.log("Ejercicio 15: ", "Notable");
    break;
  case nota >= 9 && nota <= 10:
    console.log("Ejercicio 15: ", "Sobresaliente");
    break;
  default:
    console.log("Ejercicio 15: ", "Introduce una nota correcta");
}

// 16. Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function resta(a, b) {
  return a - b;
}

const resultadoResta = resta(10, 8);
console.log("Ejercicio 16: ", resultadoResta);

// 17. Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(numero) {
  if (typeof numero === "number") {
    return numero * 2;
  } else {
    return "Debo ser ejecutada con un número";
  }
}

let resultadoDuplicaNumero = duplicaNumero(17);
console.log("Ejercicio 17: ", resultadoDuplicaNumero);
resultadoDuplicaNumero = duplicaNumero("Ger");
console.log("Ejercicio 17: ", resultadoDuplicaNumero);

//* Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function caracterInicial(str) {
  if (typeof str != "string") {
    return "Debo ser ejecutada con un string";
  } else if (str.length < 1) {
    return "Debo ser ejecutada con un string no vacío";
  } else {
    return str[0];
  }
}

console.log(caracterInicial(1));
//* Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function ultimoCaracter(str) {
  if (typeof str != "string") {
    return "Debo ser ejecutada con un string";
  } else if (str.length < 1) {
    return "Debo ser ejecutada con un string no vacío";
  } else {
    return str.slice(-1);
  }
}

console.log(ultimoCaracter(2));
//*Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
function cuentaCaracteres(str) {
  if (typeof str != "string") {
    return "Debo ser ejecutada con un string";
  } else {
    return str.length;
  }
}

console.log(cuentaCaracteres(88));

//* Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
function esPalindromo(str) {
  if (typeof str != "string") {
    return "no es un formato correcto";
  } else {
    let palabra = str.split("").reverse().join("");
    if (str === palabra) {
      return "Es palindromo";
    } else {
      return "No es palíndromo";
    }
  }
}

console.log(esPalindromo("holis"));
//* Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
function getPrecioMostrar(num) {
  if (typeof num === "number") {
    return num.toFixed(2) + " €";
  } else {
    return "no es un formato correcto";
  }
}
console.log(getPrecioMostrar(2));
//* Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
function division(num1, num2) {
  return num1 / num2;
}
console.log(division(10, 2));
//* Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esPar(2));

//* Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
let mayoresCinco = [];
let arrNum2 = [1, 2, 4, 6, 7, 8, 4];
function mayorCinco(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      mayoresCinco.push(arr[i]);
    }
  }
  return mayoresCinco;
}
console.log(mayorCinco(arrNum2));



//* Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
const numPrompt = prompt("Introduce un numero");
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(esPrimo(numPrompt));


// EXTRA
//* Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
let impares = [];
let numeros1 = [1, 2, 3, 4, 5, 6, 7];
function obtenerImpares(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impares.push(arr[i]);
    }
  }
  return impares;
}

console.log(obtenerImpares(numeros1));
//* Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const arrNum = [1, 2, 3, 4, 5, 6];
let sumatoria = 0;
function sumarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sumatoria += arr[i];
  }
  return sumatoria;
}
console.log(sumarArray(arrNum));
//* Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
const arrNum1 = [2, 2, 3];

let multiplicacion = 1;

function multiplicarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    multiplicacion *= arr[i];
  }
  return multiplicacion;
}
console.log(multiplicarArray(arrNum1));


//* Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
function checkPassword() {
    let contraseñaUsuario;
    let contraseñaGuardada = "qwer";
    let contraseñaCorrecta = false;
    for (let index = 0; index < 3; index++) {
      if (!contraseñaCorrecta) {
        contraseñaUsuario = prompt("Introduce la contraseña");
      }
      if (contraseñaGuardada === contraseñaUsuario) {
        contraseñaCorrecta = true;
      }
    }
    if (contraseñaCorrecta) {
      alert("Enhorabuena, contraseña correcta");
    } else {
      alert("Contraseña incorrecta. Has agotado los 3 intentos");
    }
  }
  checkPassword();

