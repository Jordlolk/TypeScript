class funcoesPadroes{
  speak(frase : string){
    console.log(frase)
  }
  runAt(local : string){
    console.log(`Vou para ${local}`)
  }
  sleep(){
    console.log('Dormindo')
  }
}
class Personagem extends funcoesPadroes{
    name : string
    idade : number
    constructor(name : string, idade : number){
      super()
      this.name = name
      this.idade = idade
    }
}
let Kaku = new Personagem('Kaku', 17)
Kaku.speak('Deu ruim')