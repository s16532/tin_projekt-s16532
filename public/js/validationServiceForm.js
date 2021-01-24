function validateForm(){

    const   serviceInput = document.getElementById('service');
    const   dateInput = document.getElementById('date');
    const   mechanicInput = document.getElementById('mechanic');

    const errorService = document.getElementById('errorService');
    const errorDate = document.getElementById('errorDate');
    const errorMechanic = document.getElementById('errorMechanic');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([serviceInput, dateInput, mechanicInput], [errorService, errorDate, errorMechanic], errorsSummary);

    if(!checkRequired(serviceInput.value)) {
        valid = false;
        serviceInput.classList.add("error-input");
        errorService.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(dateInput.value)) {
        valid = false;``
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateInput.value)){
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd"
    }

    if(!checkRequired(mechanicInput.value)) {
        valid = false;
        mechanicInput.classList.add("error-input");
        errorMechanic.innerText = "Pole jest wymagane";
    }


    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}