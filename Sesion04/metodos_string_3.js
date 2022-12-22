//Métodos vol. 3 > Todo lo que hemos visto son expresiones regulares tambien se puede usar regexr.com

//Buscar coincidencias en textos
let textLarg = 'Términos y condiciones especiales Tarjeta de Crédito Plan 0es3 (bine 459321): La aprobación de la tarjeta de crédito Davivienda mediante el Plan 0es3 (bine 459321), está sujeta a la evaluación de crédito según políticas y condiciones establecidas por el Banco Davivienda S.A. La emisión de la tarjeta Plan 0es3 aplica únicamente en tiendas físicas autorizadas de Alkosto'

//muestra las expresiones regulares
console.log(textLarg.match(/la/g));

//si contiene o no true o false
console.log(textLarg.includes('crédito'));
console.log(textLarg.includes('credito'));

//si un texto inicia con una x 
console.log(textLarg.startsWith('arboles'));
console.log(textLarg.startsWith('terminos'));
console.log(textLarg.startsWith('Términos'));
console.log(textLarg.startsWith('Términos y condiciones'));

//si termina con x
console.log(textLarg.endsWith('arboles'));
console.log(textLarg.endsWith('alkosto'));
console.log(textLarg.endsWith('Alkosto'));
console.log(textLarg.endsWith('de Alkosto'));



