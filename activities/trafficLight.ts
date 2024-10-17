enum Elights{
    Red,
    Green,
    Yellow
}

function signal(lights : Elights){
    switch(lights){
        case Elights.Green:
            console.log('Go!')
        break;
        case Elights.Red:
            console.log('Stop!')
        break;
        case Elights.Yellow:
            console.log('Take care!')
        break;
        default:
            console.error("Invalid Color")
        break;
    }
}

let currentLight = Elights.Green
signal(currentLight)

enum EdadosBase{
    attack = 4.6,
    defense = 10,
    letality = 29,
    health = 20
}
function dadosBaseDisplay(){
    let Pedro = {attack : EdadosBase.attack, defense : EdadosBase.defense, letality: EdadosBase.letality, health : EdadosBase.health}
    console.log(Pedro)
    Pedro.attack = 40+Pedro.defense
    console.log(Pedro)
}
dadosBaseDisplay()