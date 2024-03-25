// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4));

// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

function whatAge() {
  let age = prompt("¿Cuántos años tienes?");
  age = +age;

  if (isNaN(age) !== true) {
    if (age < 18) {
      return "Eres menor de edad.";
    } else if (age >= 18 && age < 65) {
      return "Eres mayor de edad.";
    } else {
      return "Eres un adulto mayor.";
    }
  } else {
    return "La edad debe ser un número.";
  }
}

console.log(whatAge());

// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function sumaTresNumeros(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Debo ser ejecutada con números";
  } else {
    return a + b + c;
  }
}

console.log(sumaTresNumeros(3, 5, 4));

// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

function primerosTresCaracteres(str) {
  if (typeof str !== "string") {
    return "Debo devolver un string completo";
  } else {
    return str.slice(0, 3);
  }
}

console.log(primerosTresCaracteres("The Bridge"));

// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.

function getPrecioMostrarIVA(price) {
  if (typeof price !== "number") {
    return "No es un formato correcto";
  } else {
    return price * (1.21).toFixed(2) + " €";
  }
}

console.log(getPrecioMostrarIVA(10));

// * EXTRAS

// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.

function penultimoCaracter(str) {
  if (typeof str !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (str.length < 2) {
    return str;
  } else {
    return str.slice(-2, -1);
  }
}

console.log(penultimoCaracter("The Bridge"));

// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.

function potencia(a, b) {
  return a ** b;
}

console.log(potencia(3, 2));

// Crea un botón en tu archivo HTML
// Llama a ese botón en tu archivo js y muestralo por consola

let btn = document.getElementById("btn");
console.log(btn);

// Crea una función que cuando se ejecute muestre un alert que diga “Hola”

function saludar() {
  alert("Hola!");
}

// Investiga qué es addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.

btn.addEventListener("click", saludar);
