function sum(...somma)  {
  return somma.reduce((a,b)=> a + b );
}

let prova = sum(1,2,3,4)
/* const numbers = [1, 2, 3]; */
console.log(prova);