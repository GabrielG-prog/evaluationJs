// on recupere la balise form
var myForm = document.getElementById('myForm');

// si on clique sur le bouton valider
myForm.addEventListener('submit', function (e) {
    
    // on recupère les valeurs des champs
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // on construit des regex 
    var lastNameCheck = /^[A-Za-z. ]{3,30}$/;
    var firstNameCheck = /^[A-Za-z. ]{3,30}$/;
    var emailCheck = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    e.preventDefault();
    
    // on teste les champs avec les regex et si c'est bon la balise p affiche "Valide" sinon elle affiche "Erreur"
    if (lastNameCheck.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Validate";
    }

    if (firstNameCheck.test(firstName)) {
        document.getElementById("firstNameError").textContent = "Validate";
    }

    if (emailCheck.test(email)) {
        document.getElementById("emailError").textContent = "Validate";
    }

    if (passwordCheck.test(password)) {
        document.getElementById("passwordError").textContent = "Validate";
    }

    if (!lastNameCheck.test(lastName)) {
        document.getElementById("lastNameError").textContent = "LastName is invalid";
    }
    if (!firstNameCheck.test(firstName)) {
        document.getElementById("firstNameError").textContent = "FirstName is invalid";
    }

    if (!emailCheck.test(email)) {
        document.getElementById("emailError").textContent = "Email is invalidate";
    }

    if (!passwordCheck.test(password)) {
        document.getElementById("passwordError").textContent = "Password is invalidalidate";
    }
    
    // si tout est valide alors on affiche une alert
    if (lastNameCheck.test(lastName) && firstNameCheck.test(firstName) && emailCheck.test(email) && passwordCheck.test(password)) {
        alert('Le formulaire est validé');
        window.location.reload();
    }

});