// 1 BUCLES

//* Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
for ( let i = 4; i < 10; i ++ ) {
    console.log ( i );
}
//* Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
for (let i = 3; i <= 17; i++) {
    if ((i % 2) !== 0) {
        console.log(i)
    }
}
//* Utiliza la siguiente array para resolver los próximos ejercicios: 
let gente = [{
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
//* Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
let mayores = [];

for ( let persona of gente) {
    if (persona.edad > 25){     
        mayores.push(persona);
    } 
}

console.log(mayores)
//* Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
let losConJ = [];

for ( let persona of gente){
    if ( persona.nombre[0] === 'J'){
        losConJ.push(persona);
    }
}

console.log (losConJ);
//* Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
let tieneCuatro = [];

for ( let persona of gente){
    if ( persona.nombre.length === 4){
        tieneCuatro.push(persona);
    }
}

console.log (tieneCuatro);
//* Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
let conJyCuarenta = [];

for ( let persona of gente){
    if ( persona.nombre[0] === 'J' && persona.edad < 40){
        conJyCuarenta.push(persona);
    }
}

console.log(conJyCuarenta);


// 2 OBJETOS

//* Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
let ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["mouse", "touchPad"],
    almacenamiento: {
            discos: ["SSD", "HDD"],
            maestro: 0,
        }
    
    }       

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

//* Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'
let obj = {
    a: {
        b: true,
        c: [3, 1],
    },
    d: 6,
    f: "Jose",
}
// TEST 1
if (typeof obj === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 2
  if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 3
  if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof obj.d === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (typeof obj.f === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (obj.f.length === 4) {
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

// 3 FUNCIONES

//* Crea la función convierteString debe recibir un tipo number y devolver el número como string . 
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
function convierteString(num) {
    if (typeof num === "number") {
      return num.toString();
    } else {
      return "Debo ser ejecutada con un numero";
    }
  }
  console.log(typeof convierteString(1));
//* Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function caracterInicial (str) {
    if (typeof str != 'string'){
        return 'Debo ser ejecutada con un string';
    } else if (str.length < 1) {
        return 'Debo ser ejecutada con un string no vacío';
    } else {
        return str[0];
    }
}

console.log(caracterInicial(1));
//* Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function ultimoCaracter (str) {
    if (typeof str != 'string'){
        return 'Debo ser ejecutada con un string';
    } else if (str.length < 1) {
        return 'Debo ser ejecutada con un string no vacío';
    } else {
        return str.slice(-1);
    }
}

console.log (ultimoCaracter(2));
//*Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
function cuentaCaracteres (str) {
    if (typeof str != 'string' ){
        return 'Debo ser ejecutada con un string';
    } else {
        return str.length;
    }
}

console.log (cuentaCaracteres(88));
//* Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
function getCiudadesOrdenada (str) {
    if ( typeof str != 'string' || !str.includes(',')) {
        return 'no es un formato correcto';
    } else {
        let ciudades = str.split(',');
        return ciudades.sort();
    }
}

console.log(getCiudadesOrdenada("Hola,Jesus,Corazon,Zorro"));
//* Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
function esPalindromo (str) {
    if ( typeof str != 'string') {
      return 'no es un formato correcto';
    } else {
        let palabra = str.split("").reverse().join(""); 
        if ( str === palabra) {
          return "Es palindromo";        
        } else {
          return "No es palíndromo"
        }
    }   
  }
  
  console.log(esPalindromo ('holis'));
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
    return num1/num2;
  }
  console.log(division(10, 2));
//* Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar (num) {
    if ( num %2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log (esPar(2));
//* Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
const numeros = [1,2,3,5,7,44,21,0,22,435,7];

function ordenarArray2(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}
console.log(ordenarArray2(numeros));
//* Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
let impares = []
let numeros1 = [1,2,3,4,5,6,7];
function obtenerImpares ( arr ) {
  for ( i = 0; i < arr.length; i++){
    if ( arr[i] %2 !== 0) {
      impares.push(arr[i]);
    }
  }
  return (impares);
}

console.log (obtenerImpares(numeros1));
//* Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const arrNum = [1,2,3,4,5,6];
let sumatoria = 0;
function sumarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sumatoria += arr[i];
  }
  return sumatoria;
}
console.log(sumarArray(arrNum));
//* Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
const arrNum1 = [2,2,3];

let multiplicacion = 1;

function multiplicarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    multiplicacion *= arr[i];
  }
  return multiplicacion;
}
console.log(multiplicarArray(arrNum1));
//* Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
let mayoresCinco = [];
let arrNum2 = [1,2,4,6,7,8,4];
function mayorCinco ( arr ) {
  for ( i = 0; i < arr.length; i++){
    if ( arr[i] > 5) {
       mayoresCinco.push(arr[i]);
    }
  }
  return (mayoresCinco);
}

console.log (mayorCinco(arrNum2));
//* Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
// const numPrompt = prompt("Introduce un numero");
// function esPrimo(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(esPrimo(numPrompt));
//* Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
// function checkPassword() {
//     let contraseñaUsuario;
//     let contraseñaGuardada = "qwer";
//     let contraseñaCorrecta = false;
//     let mensajeMostrado = false;
//     for (let index = 0; index < 3; index++) {
//       if (!contraseñaCorrecta) {
//         contraseñaUsuario = prompt("Introduce la contraseña");
//       }
//       if (contraseñaGuardada === contraseñaUsuario) {
//         contraseñaCorrecta = true;
//       }
//     }
//     if (contraseñaCorrecta) {
//       alert("Enhorabuena, contraseña correcta");
//     } else {
//       alert("Contraseña incorrecta. Has agotado los 3 intentos");
//     }
//   }
//   checkPassword();
//* Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

// function CalculadoraInversa() {
//     let num1 = prompt("Introduce el 1º número.");
//     let signo = prompt(
//       "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
//     );
//     let num2 = prompt("Introduce el 2º número.");
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     switch (signo) {
//       case "+":
//         resultado = num1 + num2;
//         break;
//       case "-":
//         resultado = num1 - num2;
//         break;
//       case "*":
//         resultado = num1 * num2;
//         break;
//       case "/":
//         resultado = num1 / num2;
//         break;
//       case "^":
//         resultado = num1 ** num2;
//         break;
//       case "%":
//         resultado = num1 % num2;
//         break;

//       default:
//         break;
//     }
//     return (
//       "El resultado de la operación " +
//       num1 +
//       " " +
//       signo +
//       " " +
//       num2 +
//       " es " +
//       resultado
//     );
//   }

//   //Output

//   console.log(CalculadoraInversa()); 





