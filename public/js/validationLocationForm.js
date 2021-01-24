function validateForm(){

    const   locationNameInput = document.getElementById('locationName');
    const   cityInput = document.getElementById('city');
    const   streetInput = document.getElementById('street');
    const   streetNumInput = document.getElementById('streetNum');
    const   postCodeInput = document.getElementById('postCode');
    const   postInput = document.getElementById('post');

    const errorLocationName = document.getElementById('errorLocationName');
    const errorCity = document.getElementById('errorCity');
    const errorStreet = document.getElementById('errorStreet');
    const errorStreetNum = document.getElementById('errorStreetNum');
    const errorPostCode = document.getElementById('errorPostCode');
    const errorPost = document.getElementById('errorPost');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([locationNameInput, cityInput, streetInput, streetInput, streetNumInput, postCodeInput, postInput], [errorLocationName, errorCity, errorStreet, errorStreetNum, errorPostCode, errorPost], errorsSummary);

    if(!checkRequired(locationNameInput.value)) {
        valid = false;
        locationNameInput.classList.add("error-input");
        errorLocationName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(locationNameInput.value, 2, 64)) {
        valid = false;
        locationNameInput.classList.add("error-input");
        errorLocationName.innerText = "Pole powinno zawierać od 2 do 64 znaków"
    }

    if(!checkRequired(cityInput.value)) {
        valid = false;
        cityInput.classList.add("error-input");
        errorCity.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(cityInput.value, 2, 32)){
        valid = false;
        cityInput.classList.add("error-input");
        errorCity.innerText = "Pole powinno zawierać od 2 do 32 znaków"
    }

    if(!checkRequired(streetInput.value)) {
        valid = false;
        streetInput.classList.add("error-input");
        errorStreet.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(streetInput.value, 2, 64)){
        valid = false;
        streetInput.classList.add("error-input");
        errorStreet.innerText = "Pole powinno zawierać od 2 do 64 znaków"
    }

    if(!checkRequired(streetNumInput.value)) {
        valid = false;
        streetNumInput.classList.add("error-input");
        errorStreetNum.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(streetNumInput.value, 1, 64)){
        valid = false;
        streetNumInput.classList.add("error-input");
        errorStreetNum.innerText = "Pole powinno zawierać od 1 do 64 znaków"
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

    if(!checkRequired(postInput.value)) {
        valid = false;
        postInput.classList.add("error-input");
        errorPost.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(postInput.value, 2, 32)){
        valid = false;
        postInput.classList.add("error-input");
        errorPost.innerText = "Pole powinno zawierać od 2 do 32 znaków"
    }

    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}