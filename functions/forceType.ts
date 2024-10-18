interface Address{
  rua: string
  numero: number
  timeOut? : number
}

let bairro : Address = {rua : 'Rua venidade', numero : 123}
// Nessa tipagem acima, o TS não deixa nenhum valor em interface seja diferente.
console.log(bairro.rua) // Output: Rua venidade, mas quando você coloca o mouse em cima
//de bairro.rua ele retorna algo do tipo string e não o valor em si,retorna a interface
// o mouse em cima da variavél deveria mostrar o valor de Rua.
let bairroNome = bairro.rua === 'Rua variedade'//era pra ser sempre true e não um booleano
let timeout = bairro.timeOut // bairro não possui timeOut, mas mesmo assim ele ainda 
//assim acha q pode haver um número, porém no obj não há nada, mesmo se tivesse lá
//ele ainda consideraria um undefined.



let bairro2 = {rua: 'Rua variedade', numero : 130} as Address
let bairro3 = {} as Address
// Usando as Interface, o TS não verifica se você respeitou a Interface ou não.
let satisfationBairro = {rua: 'Aloumn', numero : 134} satisfies Address
//{} satisfies Address - Usando o satisfies ele não deixa você tratar o OBJ como vazio.
//satisfationBairro.timeOut - ele também não reconhece o timeOut,porque é undefined.
let satisfationBairro2 = {rua: 'Aloumn', numero : 134, timeOut : 4} satisfies Address
//satisfationBairro2.timeOut - ele mostra apenas number, não a como ser undefined.

/* 
O uso dos 3 é válido dependendo dos casos, além disso eles deixam o ctrl+space inteligente.
*/