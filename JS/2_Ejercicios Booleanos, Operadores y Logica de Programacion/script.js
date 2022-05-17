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

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log ("Ejercicio 4: ", booleanoMix0);

// 5. Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

const valorDivisión = 17 / 3;
console.log ("Ejercicio 5: ", valorDivisión.toFixed(2));

// 6. Crear variable valorResto cuyo valor sea el resto de 17 entre 7

const valorResto = 17 % 7;
console.log ("Ejercicio 6: ", valorResto);


// 7. Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const A = 9;
const B = '9';

if (A == B){
    console.log("Son iguales");
} else{
    console.log ("No son iguales")
}

if (A === B){
    console.log("Son iguales");
} else{
    console.log ("No son iguales")
}

console.log("Ejercicio 7: ", 'El triple igual además de comparar el valor del dato, también compara el tipo de dato');

// 8. Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

let mochila = [1,2,3,4,5,6,7,8,9];
console.log(mochila.length);

// If Else

if (mochila.length > 10){
    console.log("Ejercicio 8: ", "No puedo cargar con tantas cosas");    
}else if (mochila.length >= 2 && mochila.length <= 10) {
    console.log("Ejercicio 8: ", "Que bien voy con mi mochila");
}else {
    console.log("Ejercicio 8: ", "Creo que no necesito una mochila");
}

mochila = [1,2,3,4,5,6,7,8,9,10,11];

// Switch

switch (true) {
    case (mochila.length > 10):
        console.log("Ejercicio 8: ", "No puedo cargar con tantas cosas");
        break;
    case (mochila.length >= 2 && mochila.length <= 10):
        console.log("Ejercicio 8: ", "Que bien voy con mi mochila");
        break;
    default:
        console.log("Ejercicio 8: ", "Creo que no necesito una mochila");   
        break;  
}

// 9. Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

for (let contarHasta10 = 0; contarHasta10 < 11; contarHasta10 ++){ 
    if (contarHasta10 === 10) {
        console.log("Ejercicio 9: ", "He llegado hasta 10")
    }   
    console.log(contarHasta10)
}

// 10. Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

const diaFestivo = true;

const vacaciones = diaFestivo === true ? "Hoy no hay trabajo" : "Hoy trabajo";
console.log("Ejercicio 10: ", vacaciones);

// 11. Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = [];

for (let i = 4; i < 19; i++){
    arrayBucle.push(i);
}
console.log("Ejercicio 11: ", arrayBucle);

// 12. Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++){
    resultado += arrayBucle[i];
}
console.log("Ejercicio 12: ", resultado);

// 13. Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

let arrayAprendiendo = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

for (let elemento1 of arrayAprendiendo) {
    console.log("Ejercicio 13: ", elemento1);
}

for (let elemento2 in arrayAprendiendo) {
    console.log("Ejercicio 13: ", arrayAprendiendo[elemento2]);
}

// 14. Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let j = 0;

while (j <= 20){
    if ((j % 3) == 0){
        console.log("Ejercicio 14: ", "Patata");
    }
    j++;
}

// 15. Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

let nota = prompt("Introduce un número entre 0 y 10");
switch(true){
    case (nota >= 0 && nota <= 4):
        console.log("Ejercicio 15: ", "Insuficiente");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("Ejercicio 15: ", "Suficiente");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Ejercicio 15: ", "Notable");
        break;
    case (nota >= 9 && nota <= 10):
        console.log("Ejercicio 15: ", "Sobresaliente");
        break;
    default:
        console.log("Ejercicio 15: ", "Introduce una nota correcta");
}

// 16. Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function resta (a,b) {
    return a - b;
}

const resultadoResta = resta(10,8)
console.log("Ejercicio 16: ", resultadoResta);

// 17. Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero (numero){
    if ( typeof numero === 'number'){
        return numero*2;
    } else {
        return "Debo ser ejecutada con un número";
    }
}

let resultadoDuplicaNumero = duplicaNumero (17);
console.log("Ejercicio 17: ", resultadoDuplicaNumero);
resultadoDuplicaNumero = duplicaNumero ('Ger');
console.log("Ejercicio 17: ", resultadoDuplicaNumero);