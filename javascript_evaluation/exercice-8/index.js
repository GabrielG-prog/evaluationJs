// initialisation variable
var count = 0;
var ship1 = 0;
var ship2 = 0;
var ship3 = 0;
var ship4 = 0;
var ship5 = 0;

// selection et ajout de style de la balise body
var elBody = document.querySelector("body");
elBody.style.margin = "60px auto";
elBody.style.width = "70%";
elBody.style.maxWidth = "950px";

// ajout de style et création de la balise h1
var elH1 = document.createElement("h1");
elH1.style.fontSize = "3em";
elH1.style.fontFamily = 'Helvetica, Arial, Sans-Serif';
elH1.textContent = "Battleship";
elBody.appendChild(elH1);

// création de balise br
var elBr = document.createElement("br");
elBody.appendChild(elBr);

// création de la balise p pour chaque bateaux
var elP1 = document.createElement("p");
elBody.appendChild(elP1);

var elP2 = document.createElement("p");
elBody.appendChild(elP2);

var elP3 = document.createElement("p");
elBody.appendChild(elP3);

var elP4 = document.createElement("p");
elBody.appendChild(elP4);

var elP5 = document.createElement("p");
elBody.appendChild(elP5);

// création et ajout du style de la balise div
var gameBoardContainer = document.createElement("div");
gameBoardContainer.style.position = "relative";
gameBoardContainer.style.margin = "0 auto 2em auto";
gameBoardContainer.style.width = "500px";
gameBoardContainer.style.height = "500px";
elBody.appendChild(gameBoardContainer);

// création du tableau avec les cases
for (i = 0; i < 12; i++) {
    
    for (j = 0; j < 12; j++) {

        var topPosition = j * 48;
        var leftPosition = i * 48;

        var square = document.createElement("div");
        square.id = count++;
        square.style.position = "absolute";
        square.style.boxSizing = "border-box";
        square.style.background = "grey";
        square.style.border = "1px solid black";
        square.style.width = "50px";
        square.style.height = "50px";
        gameBoardContainer.appendChild(square);
        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
    
}

// Creation du tableau de donnée avec le positionnement des bateaux 
var gameBoard = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Lorsqu'on clique sur une case et que celle-ci a des donnée egal a la gameBoard
gameBoardContainer.addEventListener('click', function (e) {

    if (e.target !== e.currentTarget) {

        var row = e.target.id % 12;
        var col = Math.floor(e.target.id / 12);
        
        // case rouge si c'est un bateaux + affichage du bateaux touché et case bleu si rien n'a ete touche
        switch (gameBoard[row][col]) {
            case 1:
                e.target.style.background = 'red';
                ship1++;
                elP1.textContent = "Sous-marin touché";
                gameBoard[row][col] = 6;
                break;

            case 2:
                e.target.style.background = 'red';
                ship2++;
                elP2.textContent = "Torpilleur touché";
                gameBoard[row][col] = 7;
                break;

            case 3:
                e.target.style.background = 'red';
                ship3++;
                elP3.textContent = "Contre-torpilleur touché";
                gameBoard[row][col] = 8;
                break;

            case 4:
                e.target.style.background = 'red';
                ship4++;
                elP4.textContent = "Croiseur touché";
                gameBoard[row][col] = 9;
                break;

            case 5:
                e.target.style.background = 'red';
                ship5++;
                elP5.textContent = "Porte-avion touché";
                gameBoard[row][col] = 10;
                break;

            case 0:
                e.target.style.background = 'blue';
                gameBoard[row][col] = 11;
                break;

        }
        
        // affiche les bateaux qui ont coulé
        if (ship1 === 2) {
            elP1.style.color = "green";
            elP1.textContent = "Le sous-marin a coulé";
        }

        if (ship2 === 3) {
            elP2.style.color = "green";
            elP2.textContent = "Le torpilleur a coulé";
        }

        if (ship3 === 4) {
            elP3.style.color = "green";
            elP3.textContent = "Le contre-torpilleur a coulé";
        }

        if (ship4 === 5) {
            elP4.style.color = "green";
            elP4.textContent = "Le croiseur a coulé";
        }

        if (ship5 === 5) {
            elP5.style.color = "green";
            elP5.textContent = "Le porte-avion a coulé";
        }
        
        // Si tout les bateaux ont coulé alors affiche alert
        if (ship1 === 2 && ship2 === 3 && ship3 === 4 && ship4 === 5 && ship5 === 5) {
            alert("Vous avez gagnez la partie !");
            window.location.reload();
        }

    }

    e.stopPropagation();

}, false);