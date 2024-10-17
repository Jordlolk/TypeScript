/* ENUM é uma estrutura para armazenar valores, sendo eles apenas chaves ou chaves com valores.
podem ser usados para estabelecer uma estrutura de decisão entre outras coisas.*/

enum Eidade {
  Adulto = 18,
  Idoso = 60,
}

function passagemDGraca(idade : number): string{
  if(1 <= idade && idade < Eidade.Idoso){
    return 'Paga passagem'
  } 
  else{
    return 'Não paga'
  }
}
console.log(passagemDGraca(60))

/* let carlos : Eidade = 18  === let carlos : Eidade = Eidade.Adulto */