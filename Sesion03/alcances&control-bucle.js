//Control de bucles: break -- continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  //estado normal
  console.log(lista[i]);

  //inidcarle que se salga del bucle
  if (lista[i] > 5) {
    break; //indica que pare el bucle y para
  }
  console.log(lista[i]);

  //indicarle que continue
  if (lista[i] === 3) {
    continue; //indica que retorna y omite
  }
  console.log(lista[i]);
}

/*AMBITO DEL BUCLE es decir el alcance que tiene las variables; las cuales solo funcionan en el bloque del codigo con let y pasa igual con const; 
con var funcionaria de manera general y se puede llamar en cualquier parte del código. Esto dependerá el alcance como tal-*/
