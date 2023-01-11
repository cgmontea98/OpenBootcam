//Operaciones aritméticas, 
let a = 3.5;
let b = 4.8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//representación de números dentro cadena de textos 
    //Convertir número a texo
console.log(typeof a);

let ast = a.toString();
console.log(ast);

//redondear números decimales
let c = 3.3
let d = c * 3;
console.log(d);

    //Solo queremos x cantd de decimales
        //toFixed() LIMITA LOS DECIMALES O AGREGA DECIMALES
            console.log(d.toFixed());
            console.log(d.toFixed(4));

        //toPrecision() REDONDEO CIENTIFICO cifras significativas quienta de izquierda a decha omite el punto
            let e = 1839.123456789
            console.log(e.toPrecision(7));

            let f = 2213556153215;
            console.log(f.toPrecision(7));
            
