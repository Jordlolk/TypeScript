function functString(str : string){
    return str
}
function functStringOrNum(strOrNum : string | number){
    return strOrNum
}
function functNumOrNull(NumOrNull? : null | number){
    return NumOrNull
}
//A semântica ReturnType<typeof nomeDaFunção>, faz com que retorne as possibilidades de return da função.
//1# - String
type PickfunctString = ReturnType<typeof functString>
//2# - String | Number 
type PickfunctNum = ReturnType<typeof functStringOrNum>
//3# - Number | Null | Undefined 
//o motivo dessa função retornar undefined é porque o "?" presente no NumOrNull não o trata como um statement obrigatório.
//logo sendo undefined
type PickfunctNumOrNull = ReturnType<typeof functNumOrNull>

//Omit - tiram uma propriedade
interface Usuario{
    nome : string
    idade : number
}
//1# - OmitNomeInUsuario {idade : number}
type OmitNomeInUsuario = Omit<Usuario, 'nome'>

//Pick - retorna apenas a propriedade escolhida
//1# - PickIdadeInUsuario {nome : string}
type PickIdadeInUsuario = Pick<Usuario, 'nome'>

interface carAlterations{
    cor : string
    modelo : string
    pneus : string
}
type carAlterationsPartial = Partial<carAlterations>
function changeCarColor(car : carAlterationsPartial){
    if(car.modelo !== undefined){
        console.log(car.modelo)
        if(car.cor === undefined && car.pneus === undefined){
            console.log('Cor e pneus padrões')
            return
        }else{
            console.log('Cor e Pneus alterados: '+ car.cor?.toUpperCase(), car.pneus?.toUpperCase())
        }
    }
    else{
        throw new Error('O carro não é valído')    
    }
}
changeCarColor({modelo : undefined, cor : undefined, pneus : undefined})