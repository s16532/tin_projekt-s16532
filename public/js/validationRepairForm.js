function validateForm(){

    const   statusInput = document.getElementById('status_id');
    const   locationInput = document.getElementById('location_id');
    const   vehicleInput = document.getElementById('vehicle_id');
    const   admissionDateInput = document.getElementById('admissionDate');
    const   admissionEmpInput = document.getElementById('admissionEmp');
    const   releaseDateInput = document.getElementById('releaseDate');
    const   releaseEmpInput = document.getElementById('releaseEmp');

    const errorStatus = document.getElementById('errorStatus');
    const errorLocation = document.getElementById('errorLocation');
    const errorVehicle = document.getElementById('errorVehicle');
    const errorAdmissionDate = document.getElementById('errorAdmissionDate');
    const errorAdmissionEmp = document.getElementById('errorAdmissionEmp');
    const errorReleaseDate = document.getElementById('errorReleaseDate');
    const errorReleaseEmp = document.getElementById('errorReleaseEmp');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([statusInput, locationInput, vehicleInput, admissionDateInput, admissionEmpInput, releaseDateInput, releaseEmpInput], [errorStatus, errorLocation, errorVehicle, errorAdmissionDate, errorAdmissionEmp, errorReleaseDate, errorReleaseEmp], errorsSummary);

    if(!checkRequired(statusInput.value)) {
        valid = false;
        statusInput.classList.add("error-input");
        errorStatus.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(locationInput.value)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(vehicleInput.value)) {
        valid = false;
        vehicleInput.classList.add("error-input");
        errorVehicle.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(admissionDateInput.value)) {
        valid = false;
        admissionDateInput.classList.add("error-input");
        errorAdmissionDate.innerText = "Pole jest wymagane";
    } else if (!checkDate(admissionDateInput.value)){
        valid = false;
        admissionDateInput.classList.add("error-input");
        errorAdmissionDate.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd"
    }

    if(!checkRequired(admissionEmpInput.value)) {
        valid = false;
        admissionEmpInput.classList.add("error-input");
        errorAdmissionEmp.innerText = "Pole jest wymagane";
    }


    if(checkRequired(releaseDateInput.value)) {
        if(!checkDate(releaseDateInput.value)) {
            valid = false;
            releaseDateInput.classList.add("error-input");
            errorReleaseDate.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
        } else if(checkDateIfAfter(releaseDateInput, admissionDateInput)) {
            valid = false;
            releaseDateInput.classList.add("error-input");
            errorReleaseDate.innerText = "Data wydania nie może poprzedzać daty przyjęcia";
        }
    }

    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}