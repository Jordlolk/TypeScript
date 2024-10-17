/* 
  Uma função ao final dos paramêtros, pode receber o tipo de valor que ela pode retornar,
  também facilita saber o que retorna e aumenta a segurança do código. 
*/
                                                            /* Aqui */
function somaComExpoente(x : number, y : number, z : number): number{
  return (x+y)**z
}
/* 
  Caso você retorne o cálculo de matemática com a função retornando ": string", o TS retorna:
  O tipo 'number' não pode ser atribuído ao tipo 'string'.
*/
console.log(somaComExpoente(3,3,1))