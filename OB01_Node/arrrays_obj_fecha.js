//Listas: arrays o arreglos
const lista = [1, "hola", true, undefined, null];
console.log(lista);

const lista2 = new Array(2, "hola", true, undefined, null);
console.log(lista2);

const lista3 = new Array(3); //aqui solo deja espacios vacios que se puede reescribir
console.log(lista3);
lista3[0] = "soy el primer elemento";
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);

//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiaomi",
  isWhite: false,
  contactos: ["Gorka", "Martin", "Raul"],
  tarjeta: {
    marca: "sandisk",
    almacenamiento: 32,
  },
};
movil.fecha = 2019; //agregar al objeto fuera del arreglo
movil.marca = "Samsung"; //modificación de keys y propiedades; pero no se puede usar {}

console.log(movil.isWhite, movil.tarjeta.marca);

//Fehcas
// Librerias Moment.js para el tema de fechas, facilita el trabajo

const ahora = new Date(); // asi da fecha de creacion de variable
console.log(ahora);

const fecha_milis = new Date(10); //usar milisegundos
console.log(fecha_milis);

const fehca_cadena = new Date("march 25 2020");
console.log(fehca_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const agno = ahora.getFullYear();

console.log(dia, mes, agno);
