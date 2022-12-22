//Métodos vol.2

//Cambiar de mays a mins y viceversa

let input = 'Aries';
let db = 'aries';

console.log(input === db);
//Controlar error toLowerCase() // toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());

//Concatenar string
let srt1 = 'primera cadena';
let srt2 = 'segunda cadena';

//a) se puede pasar todo lo que sea necesario
console.log(srt1.concat('. ', srt2));

//b) +
console.log(srt1 + '. ' + srt2);

//c) ``
console.log(`${srt1}. ${srt2}`);

//Control al usuario: eliminar espacios adicionales o de inicio y final
let srt3 = 'String con espacio al final.    ';
console.log(srt3.length) //evidenciar longitud

//trim()
console.log(srt3.trim().length) //elimar espacios prin y fin

//trimStart()
console.log(srt3.trimStart().length) //elimar espacios prin

//trimEnd()
console.log(srt3.trimEnd().length) //elimar espacios fin

//Obtener caracter en cierta posicion siempre inicia en 0
let srt4 = 'String numero 4';

//a)
console.log(srt3.charAt(5));

//b) manejo tipo lista ['s',, 't', ....]
console.log(srt3[9]);

//Posicion de palabra dentro de la cadena
let srt5 = 'Hola, soy Cristian y estoy aprendiendo. Mi nombre es Cristian y mi apellido es Montealegre';

//da poscion de la litra y si no encuentra retorna -1,  no esta
console.log(srt5.indexOf('Cristian'));

//Buscar la última posicion de la cadena
console.log(srt5.lastIndexOf('Cristian'));
