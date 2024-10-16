interface Users{
    name : string,
    age : number,
}

function timeTaked(constructor : Function){
    let data = new Date()
    constructor.prototype.timeTaked = data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear()
}
@timeTaked
class User{
    name : string
    age : number
    ageStatus: string
    constructor(user: Users){
        this.name = user.name
        this.age = user.age
        this.ageStatus = user.age > 40 ? 'Velho' : 'Jovem'
    }

    public nomeReverso(){
        console.log(this.name.split('').reverse().join(''))
    }
    displayDayAccountCreated(){
        console.log(this.timeTaked)
    }
    
}
let carlos = new User({name: 'Carlos', age: 30})
console.log(carlos.displayDayAccountCreated());





