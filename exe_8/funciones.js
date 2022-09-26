function always() {
    return true
}

function* idPar(){
    let id = 0;
    while(true) {
        yield id +=2;
    }
}

const gen = idPar();

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}