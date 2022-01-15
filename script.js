let form = document.querySelector('#main-right #section form');
let firstName = document.querySelector('#main-right #section form input:nth-child(1)');
let lastName = document.querySelector('#main-right #section form input:nth-child(4)');
let emailAddress = document.querySelector('#main-right #section form input:nth-child(7)');
let validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let password = document.querySelector('#main-right #section form input:nth-child(10)');
let submitButton = document.querySelector('#main-right #section form input[type = submit]');
if(window.innerWidth > 500){
    document.body.style.background = "url('./images/bg-intro-desktop.png') center center no-repeat, linear-gradient(to bottom, hsl(0, 100%, 74%), hsl(0, 100%, 74%))";
}
function validateInput(){
    let firstNamevalue = firstName.value.trim();
    let lastNamevalue = lastName.value.trim();
    let emailAddressvalue = emailAddress.value.trim();
    let passwordvalue = password.value.trim();
    if(firstNamevalue.length === 0){
        firstName.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        firstName.style.backgroundPositionY = "50%";
        firstName.nextElementSibling.classList.add('show');
        return false;
    }
    else if(lastNamevalue.length === 0){
        lastName.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        lastName.style.backgroundPositionY = "50%";
        lastName.nextElementSibling.classList.add('show');
        return false;
    }
    else if(!(emailAddress.value.match(validRegex))){
        emailAddress.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        emailAddress.style.backgroundPositionY = "50%";
        emailAddress.nextElementSibling.classList.add('show');
        return false;
    }
    else if(passwordvalue.length === 0){
        password.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        password.style.backgroundPositionY = "50%";
        password.nextElementSibling.classList.add('show');
        return false;
    }
    return(true);
}