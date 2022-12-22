//Manipulación de String = cadenas de caracteres "" '' pero no combinar '">error manjerar todo en solo tipo dentro del proyecto

//Todos estos string estáticos
let primera = "Comillas dobles";
console.log(primera);
let segunda = "Comillas sencillas";
console.log(segunda);

//Combinacion para precisar información "---\"...\"---" usar el backsalsh \\ o sin este pero intercalando si inicia con doble dentro usa sencillas, ej
let back = 'El otro día me dijo que "sacara la basura"';
console.log(back);
let sinBack = "El otro día me dijo que 'sacara la basura' y pues nada";
console.log(sinBack);

//Uso de backticks o `...`
let ticks = `Un string con backticks`;
console.log(ticks);

//Con ECMA6 funcionan tambien de anidación e impresión... introduce la varibale dentro del string y se adapta al cambio de esa variable. React Angular y Vue funcionan para las plantillas
let nombre = "Cristian";
let saludo = `Hola ${nombre}, bienvenido...`;
console.log(saludo);

//Backs para pantillas HTML
let plantilla = `<html> 
<h1>Creacion de etiquetas con las backtcks</h1> 
<p>Este es un párrafo</p>
</html>`;
console.log(plantilla)

//Uso para introduccion de variables en html

let lista = ['Empieza por el por qué', 'El monje', 'El poder', 'Mil más'];
