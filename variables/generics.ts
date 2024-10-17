/* 
  A sintaxe genérica é usada para receber qualquer tipo de variavél em um paramêtro e
  retorno da função, após o nome da função o '<  >' é onde determina o nome do tipo, nome
  mais usado é T de Type. 
*/

function mostrarDados<tipos>(dados : tipos): tipos{
    return dados
}
let saldo = 654
let taxa = 654 * 0.6
console.log(
  mostrarDados({nome: 'Azeziel', senha : '#O34DF'}),
  mostrarDados(['Jon', 'Snow']),
  mostrarDados(saldo+taxa),
)