interface User {
    nome : string
    age : number
}

type UserProps = keyof User // keyof é um método para puxar os nomes das chaves dentro de alguma Interface/type. 

//searchData é uma função que busca a propriedade inserida pelo usuário baseado nos dados do usuário. 
function searchData(user : User, props : UserProps ){
    console.log(user.nome+", propriedade "+props+", valor: "+user[props]);
}

searchData({nome : 'Jord', age : 20}, 'age')