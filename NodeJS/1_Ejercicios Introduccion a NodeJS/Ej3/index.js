const math = require('./numeros');

const Arr = [2, 3, 101, 201, 202, 100]

for (let i = 0; i < Arr.length; i++) {
    console.log(math.esPar(Arr[i]));
}