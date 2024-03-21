// 1. Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// alert('JavaScript funcionando correctamente');

// 2. Comenta el código que muestra el cuadro de diálogo

// alert('JavaScript funcionando correctamente')

// 3. Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor;
console.log("Ejercicio 3: ", variableSinValor);

// 4. Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1 = true;
let booleano2 = false;

console.log("Ejercicio 4: ", booleano1);
console.log("Ejercicio 4: ", booleano2);

// 5. Crear variable tipo const de nombre PI declarada con valor 3.14

const PI = 3.14159;
console.log("Ejercicio 5: ", PI);

// 6. Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const TAU = 2 * PI;
console.log("Ejercicio 6: ", TAU);

// 7. Crear variable tipo const de nombre miNombre declarada con valor tu nombre

const miNombre = 'Ger';
console.log("Ejercicio 7: ", miNombre);

// 8. Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

const miNumeroFav = 17;
console.log("Ejercicio 8: ", miNumeroFav);

// 9. Crea una variable de tipo booleano.

let booleano3 = false;
console.log("Ejercicio 9: ", booleano3);

// 10. Muestra por consola la longitud de la variable miNombre

console.log("Ejercicio 10: ", miNombre.length);

// 11. Muestra por consola el tipo de dato de la variable miNumeroFav

console.log("Ejercicio 11: ", typeof miNumeroFav);

// 12. Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
const cadena = `Mi nombre es ${miNombre} y mi número favorito es el ${miNumeroFav}`
console.log("Ejercicio 12: ", cadena);

// 13. Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
const cadena2 = 'Seré un crack en JavaScript al terminar el bootcamp'
const enMayusculas = cadena2.toUpperCase()
console.log("Ejercicio 13: ", enMayusculas);

// 14. Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

let variable = 'Hola soy un crack';

console.log("Ejercicio 14: ", variable.substring(0, 5));
console.log("Ejercicio 14: ", variable.slice(0, 5));

// 15. Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

let miNumeroFavString = miNumeroFav.toString();

console.log("Ejercicio 15: ", typeof miNumeroFavString);

// 16. Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.

const edad = 31;

const cadena3 = `Tengo una edad de ${edad} años :)`
console.log("Ejercicio 16: ", cadena3);

// 17. Muestra por consola la variable PI hasta los 2 primeros decimales

console.log("Ejercicio 17: ", PI.toFixed(2));

// 18. Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = [];
console.log("Ejercicio 18: ", arrayVacio);

// 19. Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Ejercicio 19: ", arrayNumeros);

// 20. Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Ejercicio 20: ", arrayNumeros2);

// 21. Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = [0, 2, 4, 6, 8];
console.log("Ejercicio 21: ", arrayNumerosPares);

// 22. Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log("Ejercicio 22: ", arrayNumerosNeg);

// 23. Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

const holaMundo = ['Hola', 'Mundo'];
console.log("Ejercicio 23: ", holaMundo);

const holaMundo2 = "Hola Mundo"
const separar = holaMundo2.split(' ')
console.log("Ejercicio 23: ", separar);

// 24. Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log("Ejercicio 24: ", loGuardoTodo);

// 25. Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [
  [756, 'nombre'],
  [225, 'apellido'],
  [298, 'direccion'],
];
console.log("Ejercicio 25: ", arrayDeArrays);

// 26. Muestra por consola la longitud del array “loGuardoTodo”
console.log("Ejercicio 26: ", loGuardoTodo.length);

// 27. Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push('patata');
console.log("Ejercicio 27: ", loGuardoTodo);

// 28. Ordena de mayor a menor la variable arrayNumeros y muestrala por consola

console.log("Ejercicio 28: ", arrayNumeros.reverse());
console.log("Ejercicio 28: ", arrayNumeros.sort((a,b) => b - a));

// 29. Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola
console.log("Ejercicio 29: ", arrayNumeros2.sort((a,b) => a - b));

// 30. Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log("Ejercicio 30: ", loGuardoTodo[1]);

// 31. Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.push('Euralio');
console.log("Ejercicio 31: ", loGuardoTodo);

// 32. Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const Coche = { 
    marca: 'Renault', 
    modelo: 'Megane', 
    matrícula: '472HGF' 
}
console.log("Ejercicio 32: ", Coche);

// 33. Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const Casa = { 
    codPostal: 46020, 
    calle: 'Villalonga', 
    portal: 10, 
    piso: 2 }
console.log("Ejercicio 33: ", Casa);

// 34. Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
  lenguajes: ['javascript', 'php'],
  proyectos: ['mi pagina personal', 'proyecto con React']
}

console.log("Ejercicio 34: ", FullStackDeveloper);

// 35. Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = { 
    nombre: 'Kiara', 
    raza: 'Labrador', 
    color: 'blanco', 
    edad: 5 
}
console.log("Ejercicio 35: ", Perro);

// 36. Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

const Noticia = {
  titular: 'Desarrollador FullStack encuentra trabajo',
  cuerpo: 'Aprendí React y encontre curro a las 3 semanas, ole!'
}
console.log("Ejercicio 36: ", Noticia);

// 37. Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

const Persona = { 
  nombre: 'Sofía', 
  apellidos: ['Perez', 'García'], 
  edad: 57 
}
console.log("Ejercicio 37: ", Persona);

// 38. Muestra por consola el nombre de la variable Persona

console.log("Ejercicio 38: ", Persona.nombre);

// 39. Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log("Ejercicio 39: ", FullStackDeveloper.lenguajes[0]);

// 40. Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

const Portatil = { 
  marca: 'Asus'
 }
console.log("Ejercicio 40: ", Portatil.marca);

// 41. Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola.

console.log("Ejercicio 41: ", Portatil['marca']);

// 42. Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

const Concierto = { 
  grupos: ['ACDC', 'Vetusta Morla', 'Estopa']
 }
console.log("Ejercicio 42: ", Concierto.grupos);

// 43. Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo,
//Verde, Azul] y muestra este array por consola

const Led = { 
  rojo: 'red', 
  verde: 'green', 
  azul: 'blue' 
}

const RGB = [Led.rojo, Led.verde, Led.azul];

console.log("Ejercicio 43: ", Led);
console.log("Ejercicio 43: ", RGB);

// 44. Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const O_Error = { 
  codigo: 123456 
}

console.log("Ejercicio 44: ", O_Error.codigo);

// 45. Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

const Grupo = { 
  integrantes: ['Ger', 'Luis', 'Andrés']
}

const integrantes = Grupo.integrantes;
console.log("Ejercicio 45: ", integrantes[0]);
console.log("Ejercicio 45: ", integrantes[1]);
console.log("Ejercicio 45: ", integrantes[2]);

// 46. Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

const Impresora = { 
  tinta: { 
    rojo: 'red', 
    verde: 'green', 
    azul: 'blue' 
  } 
}

const nivelesTinta = [Impresora.tinta.rojo, Impresora.tinta.azul, Impresora.tinta.verde];
console.log("Ejercicio 46: ", nivelesTinta);

// 47. Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

const Movil = { 
  especificaciones: ['pantalla', 'cámara', 'altavoces'] 
}
console.log("Ejercicio 47: ", Movil);

// 48. Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

Portatil.marca = 'MSI';
console.log("Ejercicio 48: ", Portatil);

// 49. Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

Concierto.grupos.push("Guns N'Roses");
console.log("Ejercicio 49: ", Concierto);

// 50. Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

Concierto.fecha = '12/02/2022';
console.log("Ejercicio 50: ", Concierto.fecha);
Concierto.fecha = new Date();
console.log("Ejercicio 50: ", Concierto.fecha);

// 51. Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

Grupo.integrantes.pop();
console.log("Ejercicio 51: ", Grupo.integrantes.length);