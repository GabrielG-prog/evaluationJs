// creation du jeu avec DOM
// selection de la balise body
var elBody = document.querySelector('body');

// Creation de la balise div pour inserer le tableau de morpion
var elMorpion = document.createElement("div");
elMorpion.setAttribute('class', 'morpion');
elMorpion.style.position = "relative";
elMorpion.style.margin = "0 auto 2em auto";
elMorpion.style.width = "500px";
elMorpion.style.height = "500px";
elBody.appendChild(elMorpion);

// création du tableau morpion
for (i = 0; i < 3; i++) {

    for (j = 0; j < 3; j++) {

        var elCase = document.createElement("div");
        elCase.setAttribute('class', 'case');
        elCase.style.position = "absolute";
        elCase.style.boxSizing = "border-box";
        elCase.style.background = "grey";
        elCase.style.border = "1px solid black";
        elCase.style.width = "50px";
        elCase.style.height = "50px";
        elMorpion.appendChild(elCase);

        var topPosition = j * 80;
        var leftPosition = i * 80;

        elCase.style.top = topPosition + 'px';
        elCase.style.left = leftPosition + 'px';
    }

}

// creation des balises p pour afficher les scores de O et X
var elPo = document.createElement("p");
elBody.appendChild(elPo);
var elPx = document.createElement("p");
elBody.appendChild(elPx);

// Programme Jeu
// initialisation des variables
var i = 0;
var scoreX = 0;
var scoreO = 0;

//Selectionne toute les cases
var cases = document.querySelectorAll('.case');

// permet de savoir si X ou O joue grace au compteur i si c'est pair c'est au tour de O sinon c'est au tour de Y
function round() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

// Si X ou O a marque 3 point alors il gagne la partie
function score3() {
    if (scoreO == 3) {
        alert('O a gagner la partie');
        cases.forEach(el => el.innerHTML = '');
        elPx.textContent = "";
        elPo.textContent = "";

    } else if (scoreX == 3) {
        alert('X a gagner la partie');
        cases.forEach(el => el.innerHTML = '');
        elPx.textContent = "";
        elPo.textContent = "";
    }
}

//Afficher le gagnant (le signe X ou O) avec son score et effacer toute les cases
function printWin(win) {
    if (win == 'X') {
        scoreX++;
        elPx.textContent = " X a gagner avec comme score de " + scoreX;
        cases.forEach(el => el.innerHTML = '');
    } else {
        scoreO++;
        elPo.textContent = " O a gagner avec comme score de " + scoreO;
        cases.forEach(el => el.innerHTML = '');
    }

    score3();
}

// Toute les combinaison pour gagner le jeu
function isWin() {
    // 3 lignes
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        //Afiiche le gagnant avec le signe contenu dans la case
        printWin(cases[0].innerHTML);

    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        printWin(cases[3].innerHTML);

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        printWin(cases[6].innerHTML);

    }
    // 3 Colonnes
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        printWin(cases[0].innerHTML);

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        printWin(cases[1].innerHTML);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        printWin(cases[2].innerHTML);
    }
    // 2 diagonales
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        printWin(cases[0].innerHTML);
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        printWin(cases[2].innerHTML);
    } else if (cases[0].innerHTML !== '' && cases[1].innerHTML !== '' && cases[2].innerHTML !== '' && cases[3].innerHTML !== '' && cases[4].innerHTML !== '' && cases[5].innerHTML !== '' && cases[6].innerHTML !== '' && cases[7].innerHTML !== '' && cases[8].innerHTML !== '') {
        alert("MATCH NUL !!!");
        cases.forEach(el => el.innerHTML = '');
    }
}

// Choisir chaque case
cases.forEach(el => el.addEventListener('click', play));

//Afficher X et/ou O dans une case ou on clique
function play() {
    //Si la case est vide alors tu ecris ce qui ya dans la fonction round (X ou O)
    if (!this.innerHTML) {
        this.innerHTML = round();
        isWin();
    }
}