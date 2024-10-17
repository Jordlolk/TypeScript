const cores = {
    red : 'red',
    blue : 'blue'
}
type props =  typeof cores
// typeof cores direcionado para um type, faz com que o type receba o nome e o tipo de propriedade que a variável tem.
// quando não se trata de um OBJ o type apenas pega o valor que a VAR tem, como:
// let blackAndWhit = 'gray', type valor = typeof blackAndWhit // 'cinza'
let colors : props = {red : 'Red', blue : 'Blue'}
console.log(colors);
