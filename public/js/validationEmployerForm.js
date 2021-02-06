function validateForm(){

    const   unameInput = document.getElementById('uname');
    const   lastNameInput = document.getElementById('lastName');
    const   firstNameInput = document.getElementById('firstName');

    const errorUname = document.getElementById('errorUname');
    const errorLastName = document.getElementById('errorLastName');
    const errorFirstName = document.getElementById('errorFirstName');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([unameInput, lastNameInput, firstNameInput], [errorUname, errorLastName, errorFirstName], errorsSummary);

    if(!checkRequired(unameInput.value)) {
        valid = false;
        unameInput.classList.add("error-input");
        errorUname.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(unameInput.value, 2, 32)) {
        valid = false;
        unameInput.classList.add("error-input");
        errorUname.innerText = "Pole powinno zawierać od 2 do 32 znaków"
    }

    if(!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 32)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 32 znaków"
    }

    if(!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 32)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 32 znaków"
    }


    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}