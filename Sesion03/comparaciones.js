//Comparaciones

//Primera: igualdad == o ===
let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)
//Comparación débil, solo verifica/compara el valor que contiene
if(a == b){
    console.log('5 es igual a 5')
}
//Comparación fuerte, compara valor y tipo de dato
if(a === b){
    console.log('a es igual a b')
}

//Segunda: desigualdad
let c = 4;
let d = "4";
//básica: diferente a; Si usa  = compara en valor y tipo; pero si usa == compara en valor o en tipo
if(c != d){
    console.log('c es difetente a d');
}
if(c !== d){
    console.log('c es difetente a d');
}

//Mayores y menores > --- <
let max = 10;
let min = 10;

if (max > min){
    console.log('max es mayor');
}

if (max >= min){
    console.log('max es mayor')
}

if(min < max){
    console.log('min es menor');
}

if (min <= max){
    console.log('min es menor')
}