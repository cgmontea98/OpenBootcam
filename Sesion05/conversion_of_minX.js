//Operador .valueOf() = obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3); //Castear y obligar que sea un número

console.log("object :>> ", a, "object :>> ", b);
console.log(a + b);

    //imprimir el new Number como lo que es
    console.log(b.valueOf());

//Para el caso de string los vuele como iterador donde cada caracter y espacio tiene una casilla asisnga
let str = new String("Hola soy un srting");
console.log(str);
console.log(str.valueOf());

//NaN (No es un número) y arroja esto porque el uso del cód que se aplica no corresponde a lo que guarda- Infinity
let n = Number("hola");
console.log(n);
console.log(isNaN(n));

let num = 19;
let div = 0;
console.log(num / div);

let div_2 = null;
console.log(num / div_2);

//Como converitr string a numeros: numer. parseInt y parseFloat
    //Number
    let num1 = "5.89";
    let num2 = 17.2;
    console.log(typeof num1, num2);
    console.log(num1 + num2); //concatena por que es string y el + es para unir

    //Number(num1) convierte el string a número
    console.log(num2 + Number(num1));

    //parse = exluir valor dentro de otro o conversion de valores a enteros flotantes

        //Int esto omite los decimales
        console.log(parseInt(num1));

        //Float convierte todo
        console.log(parseFloat(num1));

//Numeros hezadecimales: no hay decimales
let numH = '0x3a5b7';
    //parseInt
    console.log(parseInt(numH));
    

//Obtener los valores máx y mín en JS trabajndo con bytes
let min = Number.EPSILON;
let min_valor = Number.MIN_VALUE;

let max_valor = Number.MAX_VALUE;

console.log('min :>> ', min);
console.log('min :>> ', min_valor );
console.log('max_valor :>> ', max_valor);
