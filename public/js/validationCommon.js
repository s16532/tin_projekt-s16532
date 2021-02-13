function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i=0; i<inputs.length; i++) {
        inputs[i].classList.remove("error_input");
    }
    for(let i=0; i<errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === ""){
        return false;
    }
    if(value === "yyyy-mm-dd"){
        return false;
    }
    return true;
}

function checkTextLengthRange(value, min, max){
    if (!value) {
        return false
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false
    }
    if (min && length < min) {
        return false;
    }

    return true
}

function checkEmail(value){
    if(!value){
        return false
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}

function checkPostCode(value){
    if(!value){
        return false
    }
    value = value.toString().trim();
    const re = /\d{2}-\d{3}/g;
    return re.test(value);
}

function checkIfNumber(value){
    if(!value){
        return false
    }
    value = value.toString().trim();
    const re = /\d/g;
    return re.test(value);
}

function checkProcudcionDate(value){
    if(!value){
        return false
    }
    value = value.toString().trim();
    const re = /\d{4}/g;
    return re.test(value);
}

function checkEngineSize(value){
    if(!value){
        return false
    }
    value = value.toString().trim();
    const re = /(\d|\d{2})\.\d/g;
    return re.test(value);
}

function checkDate(value) {
    if (!value) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}

function checkDateIfAfter(value, compareTo) {
    if (!value) {
        return false;
    }
    if (!compareTo) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }
    if (!pattern.test(compareTo)) {
        return false;
    }
    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if (valueDate.getTime() <= compareToDate.getTime()) {
        return false;
    }
    return true;

}

function checkDateNotDefault(value) {
    if (!value) {
        return false;
    }
    const pattern =! /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}