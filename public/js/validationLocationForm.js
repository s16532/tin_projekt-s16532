function validateForm(){

    const   nameInput = document.getElementById('name');
    const   cityInput = document.getElementById('city');
    const   streetInput = document.getElementById('street');
    const   streetNumInput = document.getElementById('streetNum');
    const   postCodeInput = document.getElementById('postCode');

    const errorName = document.getElementById('errorName');
    const errorCity = document.getElementById('errorCity');
    const errorStreet = document.getElementById('errorStreet');
    const errorStreetNum = document.getElementById('errorStreetNum');
    const errorPostCode = document.getElementById('errorPostCode');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([nameInput, cityInput, streetInput, streetInput, streetNumInput, postCodeInput], [errorName, errorCity, errorStreet, errorStreetNum, errorPostCode], errorsSummary);

    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków"
    }

    if(!checkRequired(cityInput.value)) {
        valid = false;
        cityInput.classList.add("error-input");
        errorCity.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(cityInput.value, 2, 60)){
        valid = false;
        cityInput.classList.add("error-input");
        errorCity.innerText = "Pole powinno zawierać od 2 do 60 znaków"
    }

    if(!checkRequired(streetInput.value)) {
        valid = false;
        streetInput.classList.add("error-input");
        errorStreet.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(streetInput.value, 2, 60)){
        valid = false;
        streetInput.classList.add("error-input");
        errorStreet.innerText = "Pole powinno zawierać od 2 do 60 znaków"
    }

    if(!checkRequired(streetNumInput.value)) {
        valid = false;
        streetNumInput.classList.add("error-input");
        errorStreetNum.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(streetNumInput.value, 1, 60)){
        valid = false;
        streetNumInput.classList.add("error-input");
        errorStreetNum.innerText = "Pole powinno zawierać od 1 do 60 znaków"
    }

    if(!checkRequired(postCodeInput.value)) {
        valid = false;
        postCodeInput.classList.add("error-input");
        errorPostCode.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(postCodeInput.value, 2, 6)){
        valid = false;
        postCodeInput.classList.add("error-input");
        errorPostCode.innerText = "Pole powinno zawierać od 2 do 6 znaków"
    } else if (!checkPostCode(postCodeInput.value)){
        valid = false;
        postCodeInput.classList.add("error-input");
        errorPostCode.innerText = "Pole powinno zawierać ważny polski kod pocztowy"
    }

    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}