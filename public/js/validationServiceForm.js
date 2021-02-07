function validateForm(){

    const   nameInput = document.getElementById('name');
    const   priceInput = document.getElementById('price');

    const errorName = document.getElementById('errorName');
    const errorPrice = document.getElementById('errorPrice');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([nameInput, priceInput], [errorName, errorPrice], errorsSummary);

    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków"
    }

    if(!checkRequired(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "Pole jest wymagane";
    } else if (!checkIfNumber(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "Pole powinno być liczbą"
    }

    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}