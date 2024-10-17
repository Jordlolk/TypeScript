/* 
  Union é uma sintaxe usada para declarar mais de um tipo para a VAR.
*/

function cpfStringOrNumber(cpf : string | number){
  console.log(cpf)
}
cpfStringOrNumber('33434213432') // OutPut = '034.342.134-32'
cpfStringOrNumber(33434213432) // OutPut = 33434213432
