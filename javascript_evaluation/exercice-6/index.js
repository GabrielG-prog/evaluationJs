function checkPhoneNumber() {

    // On recupere la valeur du champ numeros
    var number = document.getElementById("number").value;
    
    // On ecrit le regex du numeros de telephone
    var numberCheck = "^(06|07|01)[0-9]{8}$";

    // On regarde sur le numeros est valide par le regex si c'est bon on met TRUE sinon on met false
    if (number.match(numberCheck)) {
        alert("TRUE");
    } else {
        alert("FALSE");
    }

}

// On recupere la balise form 
var form = document.getElementById("myForm");

// quand on clique sur le bouton valider on active la fonction
form.addEventListener('submit', function () {
    checkPhoneNumber();
});