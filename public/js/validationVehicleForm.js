function validateForm(){

    const   VINInput = document.getElementById('VIN');
    const   vehicleTypeInput = document.getElementById('vehicleType');
    const   brandInput = document.getElementById('brand');
    const   modelInput = document.getElementById('model');
    const   productionYearInput = document.getElementById('productionYear');
    const   engineTypeInput = document.getElementById('engineType');
    const   engineSizeInput = document.getElementById('engineSize');

    const errorVIN = document.getElementById('errorVIN');
    const errorVehicleType = document.getElementById('errorVehicleType');
    const errorBrand = document.getElementById('errorBrand');
    const errorModel = document.getElementById('errorModel');
    const errorProductionYear = document.getElementById('errorProductionYear');
    const errorEngineType = document.getElementById('errorEngineType');
    const errorEngineSize = document.getElementById('errorEngineSize');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([VINInput, vehicleTypeInput, brandInput, modelInput, productionYearInput, engineTypeInput, engineSizeInput], [errorVIN, errorVehicleType, errorBrand, errorModel, errorProductionYear, errorEngineType, errorEngineSize], errorsSummary);

    if(!checkRequired(VINInput.value)) {
        valid = false;
        VINInput.classList.add("error-input");
        errorVIN.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(VINInput.value, 17, 17)) {
        valid = false;
        VINInput.classList.add("error-input");
        errorVIN.innerText = "Numer VIN musi mieć 17 znaków"
    }

    if(!checkRequired(vehicleTypeInput.value)) {
        valid = false;
        vehicleTypeInput.classList.add("error-input");
        errorVehicleType.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(brandInput.value)) {
        valid = false;
        brandInput.classList.add("error-input");
        errorBrand.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(brandInput.value, 2, 32)){
        valid = false;
        brandInput.classList.add("error-input");
        errorBrand.innerText = "Pole powinno zawierać od 2 do 34 znaków"
    }

    if(!checkRequired(modelInput.value)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(modelInput.value, 1, 32)){
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Pole powinno zawierać od 1 do 32 znaków"
    }

    if(!checkRequired(productionYearInput.value)) {
        valid = false;
        productionYearInput.classList.add("error-input");
        errorProductionYear.innerText = "Pole jest wymagane";
    } else if (!checkProcudcionDate(productionYearInput.value)){
        valid = false;
        productionYearInput.classList.add("error-input");
        errorProductionYear.innerText = "Pole powinno zawierać rok produkcji w formacie yyyy np: 2000"
    }

    if(!checkRequired(engineTypeInput.value)) {
        valid = false;
        engineTypeInput.classList.add("error-input");
        errorEngineType.innerText = "Pole jest wymagane";
    }

    if(checkRequired(engineSizeInput.value)) {
        if(!checkEngineSize(engineSizeInput.value)) {
            valid = false;
            engineSizeInput.classList.add("error-input");
            errorEngineSize.innerText = "Powinno składać się z wartości pojemności silnika np. 2.3 albo 10.0";
        }
    }

    if(!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}