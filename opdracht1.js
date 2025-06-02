// Maak een objectmodel aan voor een leerling
// zorg ervoor dat de leerling in een klas kan zitten. 

leerling = {
    naam:"Els",
    achternaam : "Dotjes",
    leeftijd : 16,
    Inklas : false
}

function Klas(student){
    if (student.Inklas == true) {
        console.log(`${student.naam} ${student.achternaam} zit in de klas.`);
    }
    else(student.Inklas == false);{
        console.log(`${student.naam} ${student.achternaam} zit niet in de klas.`);
    }
}

Klas(leerling)