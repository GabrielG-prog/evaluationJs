// creation d'un tableau avec comme valeur des notes
var tablNotes = [10, 13, 13, 12, 15, 12, 11, 16, 14];

function computeNotes(table) {

    // Taille du tableau
    var tablSize = table.length;
    // initialisation de la variable somme
    var sum = 0;

    // on parcours le tableau et on aditionne toutes les valeurs du tableau
    for (var i = 0; i < tablSize; i++) {
        sum += table[i];
    }
    
    // on divise la somme des valeurs du tableau avec le nombre de valeurs du tableau
    var result = sum / tablSize;

    return result;

}

// on affiche avec alert
alert("Voici les notes: " + tablNotes + " et la moyenne est de " + computeNotes(tablNotes));