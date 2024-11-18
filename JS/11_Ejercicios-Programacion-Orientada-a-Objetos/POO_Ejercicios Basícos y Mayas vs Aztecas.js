// Ejercicio 1
class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
  
    obtDetalles() {
      console.log(`Hola mi ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`);
    };
  } 

const persona1 = new Persona ('Paquito', 39, 'chico')
console.log (persona1)
persona1.obtDetalles();

// Ejercicio 2
class Estudiante extends Persona { 
    constructor (nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.curso = curso;
      this.grupo = grupo;
      }
      registrar() {
    console.log(`Hola mi nombre es ${this.nombre} y estoy en el grupo ${this.grupo} del curso de ${this.curso}`);
      };
  };

  const estudiante1 = new Estudiante ('Laura', 47, 'chica', 'Enologia', 2)
  console.log(estudiante1);
  estudiante1.registrar()

// Ejercicio 3
class Profesor extends Persona { 
    constructor (nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.asignatura = asignatura;
      this.nivel = nivel;
      }
      asignar() {
    console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}, doy la asignatura de ${this.asignatura} en modo ${this.nivel}`);
      };
  };

  const profesor1 = new Profesor ('Laura', 47, 'chica', 'mecánica', 'hard')
  console.log(profesor1);
  profesor1.asignar()

// Clases Mayas y Aztecas
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
      }
    
      attack() {
        return this.power
      }

      defend(damage) {
          const vida = this.life - damage
          console.log(`Jaja mi vida sigue siendo ${vida}`);
      }
} 

class Maya extends Warrior { 
    constructor (life, power) {
      super(life, power) // Llama al constructor del padre
      }
      drinkColaCao() {
        this.power += 10
      };
  };

  class Azteca extends Warrior { 
    constructor (life, power) {
      super(life, power) // Llama al constructor del padre
      }
      drinkNesquik() {
        this.life += 10
      };
  };

  const soldadoMaya = new Maya (100, 20)
  const soldadoAzteca = new Azteca(70,30)

  console.log(soldadoMaya);
  console.log(soldadoAzteca);

  console.log("--------------------");

  // Primera instrucción
  soldadoAzteca.drinkNesquik()

  console.log("Soldado Azteca: ",soldadoAzteca);

  console.log("--------------------");

  // Segunda intrucción
  soldadoMaya.drinkColaCao()

  console.log("Soldado Maya: ",soldadoMaya);

  console.log("--------------------");

  // Tercera intrucción
  soldadoAzteca.defend(soldadoMaya.attack())

  console.log("--------------------");

  // Cuarta intrucción
  soldadoMaya.defend(soldadoAzteca.attack())

  console.log("--------------------");