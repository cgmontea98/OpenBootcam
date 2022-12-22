//métodos usado para cadenas

//Primero: longitud de strins
let str = 'Hola, soy un string';
str.length; //atributo/propiedad de los sting
console.log(str.length);

//Segundo: obtener partes de caracteres
//a slice() solicita un índice para contar desde ahí hasta el último también se le indica; 
let sliceStr = str.slice(0, 8);
console.log(sliceStr);

//b substring() inicio y final; 
let substringStr = str.substring(0, 8);
console.log(substringStr);

//c substr()>no se usa
let subsStr = str.substring(5, 19);
console.log(subsStr)

//REEMPLAZAR contenido 
let cadena = 'Hola mi nombre es Cristian';
console.log(cadena);

console.log(cadena.replace('Cristian', 'Camilo')); //Encuentra valor primero luego cambia

//Solo afecta la primera instancia no todas
let textLarg = 'Términos y condiciones especiales Tarjeta de Crédito Plan 0es3 (bine 459321): La aprobación de la tarjeta de crédito Davivienda mediante el Plan 0es3 (bine 459321), está sujeta a la evaluación de crédito según políticas y condiciones establecidas por el Banco Davivienda S.A. La emisión de la tarjeta Plan 0es3 aplica únicamente en tiendas físicas autorizadas de Alkosto,'

console.log(textLarg.replace('de', 'sapoperro'));


//Reemplazar varias palabras> usal /---/g(GLOBAL) cambia todo
console.log(textLarg.replace(/de/g, 'sapoperro'));

