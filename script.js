let form = document.querySelector('#main-right #section form');
let firstName = document.querySelector('#main-right #section form input:nth-child(1)');
let lastName = document.querySelector('#main-right #section form input:nth-child(4)');
let emailAddress = document.querySelector('#main-right #section form input:nth-child(7)');
let password = document.querySelector('#main-right #section form input:nth-child(10)');
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
    }
    if(lastNamevalue.length === 0){
        lastName.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        lastName.style.backgroundPositionY = "50%";
        lastName.nextElementSibling.classList.add('show')
}
    if(emailAddressvalue.length === 0){
        emailAddress.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        emailAddress.style.backgroundPositionY = "50%";
        emailAddress.nextElementSibling.classList.add('show');
    }
    if(passwordvalue.length === 0){
        password.style.background = "url('./images/icon-error.svg') top right 7% no-repeat";
        password.style.backgroundPositionY = "50%";
        password.nextElementSibling.classList.add('show');
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
})