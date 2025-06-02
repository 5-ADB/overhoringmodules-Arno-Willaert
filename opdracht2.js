// schrijf op 2 verschillende manieren een constructor voor onderstaande object

const factuur = {
    id: 1,
    klant: "Jos Joskens",
    producten: [
        "appel", "peer", "banaan"
    ],
    betaald: false
}

// optie 1
function Factuur1(id, klant, producten, betaald){
    this.id = id,
    this.klant = klant,
    this.producten = producten
    this.betaald = betaald
}

const rekening1 = new Factuur1(1, "pieter jansen", "appels, bananen, citroenen", "nee")
console.log(rekening1);


// optie 2

function Factuur2(id, klant, producten, betaald){
    return{
        id,
        klant,
        producten,
        betaald,
    }
}

const rekening2 = new Factuur2(2, "Els Dotjes", "Worsten", "Ja")
console.log(rekening2);