//Bucles

//Primero: for > (1. inicialización; 2. condición; 3. actualización){BUCLE mientras se cumple 2}
//para el caso de la actualización, puede hacerse: i = i +1 // i +=1 // i++

for (let i = 0; i < 10; i++){
    console.log(i);
    //no se muestra el 10 porque se inicia en 0 y no esta igualado
}

for (let i = 0; i < 10; i = i + 2){
    console.log(i);
}

for (let i = 0; i < 10; i += 3){
    console.log(i);
}

//Pa listas
let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2)
}

//Segundo: for of --- hace lo mismo pero con menor especificidad
for (let valor of lista){
    console.log(valor * 2);
}

//Tercer: forEach usando funcion arrow o flecha o expresada
lista.forEach(valor => {
    console.log(valor * 2);
})

//Cuarto: forIn > para objetos donde va a evaluar los parametros contenidos

let persona = {
    nombre: 'Cris',
    apel: 'Montea',
    edad: 24,
    isDev: true
}

//Para acceder a elementos:
//1)
console.log(persona.edad);

//2)
let prop = 'edad';
console.log(persona[prop]);



for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
