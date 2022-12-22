//Bucles While
//Normal: while (condición )

let i = 0;
let max = 10;

while (i < max) {
    //se ejecuta hasta el final sin la actualización
    console.log(i);
    //la actualización esta fuera del ()
    i++
}

//Similar usando el Do
i = 15;
do{
    //la actualización esta primero y siempre ejecuta el do
    i++
} while (i < max) {
    console.log(i);
}