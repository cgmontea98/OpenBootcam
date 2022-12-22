//Control de bucles desde los labels/etiquetas pero no se aconseja, la programacón debe de ser limpia
//Nombrar a for y while; aun se usa los break y continue. SE USA PARA BUCLES INCUSTRADOS

/* //EJ Sin
let unidades = 0;
let decenas = 0;

while(true){
    //controla decenas
    while(true){
        console.log(`El numero actual de decenas: ${decenas}, unidades: ${unidades}`);
        //controla unidades
        unidades ++
        if(unidades === 10){
            unidades = 0
            break
        }
    }
    decenas++
    //control
    if(decenas === 2){
        console.log(`El numero actual de decenas: ${decenas}, unidades: ${unidades}`);
        break
    }
} */

//USANDO LABELS
let unidades = 0;
let decenas = 0;
bucleDecenas: while(true){
    //controla decenas
    bubleUnidades: while(true){
        console.log(`El numero actual de decenas: ${decenas}, unidades: ${unidades}`);
        //controla unidades
        unidades ++
        if(unidades === 10){
            unidades = 0
            break bubleUnidades
        }
        if(decenas === 2){
            console.log(`El numero actual de decenas: ${decenas}, unidades: ${unidades}`);
            break bucleDecenas
        }
    }
    decenas++
}