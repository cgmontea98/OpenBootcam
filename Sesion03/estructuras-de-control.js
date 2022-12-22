//Bifurcaciones y casos
//Primera: if else
if (true) {
  console.log("es verdadero");
}

if (false) {
  console.log("es verdadero");
} else {
  console.log("no es verdadero");
}

//Ej. de estructura básca
let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insuficiente");
}

//Concatenación if---else---if else
let nota = 5;

/* //Camino 1
if(nota === 5){
    console.log('Aprobado');
}else if(nota === 4){
    console.log('Sobre saliente');
}else if(nota === 3){
    console.log('Aprobado por poco');
}else if(nota === 2){
    console.log('No aprobado');
}else if(nota === 1){
    console.log('Todo mal');
}else{
    console.log('Ingrese nota del 1 al 5');
} */

/* Camino 2 poco aconsejabale
else{
    if(nota === 4){
        console.log('Sobre saliente');
    }
} */

//Camino 3 Switch, para refactorizar código en un solo valor colocar varias funciones

switch (nota) {
  case 5:
    console.log("Aprobado");
    break;

  case 4:
    console.log("Sobre saliente");
    break;

  case 3:
    console.log("Aprobado por poco");
    break;

  case 2:
    console.log("No aprobado");
    break;

  case 1:
    console.log("Todo mal");
    break;

  default:
    console.log("Ingrese nota del 1 al 5");
    break;
}
