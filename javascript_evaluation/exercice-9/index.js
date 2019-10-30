function CheckPalindrome(str) {

    // on prend la valeur que l'utilisateur a saisie
    str = prompt("Veillez saisir votre mot");

    // on initialise les variables
    var result = true;
    var i = 0;

    // on ecrit la taille de la valeur saisie par l'utilisateur
    var n = str.length;

    // Tant que i est inferieur ou egal a la moitie de la taille de la valeur
    while (result && i <= n / 2) {

        // si la premiere valeur est different de la dernière valeur
        if (str[i] != str[n - 1 - i]) {
            result = false;
        }

        i++;
    }

    return result;
}

alert(CheckPalindrome());
