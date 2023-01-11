//- Una variable que contenga tu altura en centímetros (entero)
let est_cm = 167;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let est_F = est_cm.toFixed(2)/100;
console.log('object :>> ', est_F);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pes_K = 75;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let est_A = est_F.toPrecision(1);
console.log('object :>> ', est_A);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pes_Kb = Math.round(pes_K) - 5;
console.log(pes_Kb);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_vs = Number.MAX_VALUE + 1;
let max_v = Number.MAX_VALUE;

if(max_v === max_vs){
    console.log(`el máximo valor que se puede obtener en Javascript + 1`);
}else{
    console.log(`es diferente`);
}