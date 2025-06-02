function Huisdier(soort, naam, leeftijd){
    this.soort = soort,
    this.naam = naam
    this.leeftijd = leeftijd
}


function print(dier){
    console.log(`Mijn ${dier.soort} ${dier.naam} is ${dier.leeftijd} jaar oud`);
}

module.exports = {Huisdier, print}