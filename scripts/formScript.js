const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

passwordConfirm.addEventListener("focusout", ()=> {

    if (password.value !== passwordConfirm.value ) {

        errorMessage.textContent = "Passwords do not match! Try entering your password again.";

        password.value="";

        passwordConfirm.value="";

        password.focus();


    } else {
        errorMessage.style.display = "none";
    }
});

const chosenValue = document.getElementById("current-rating");
const range = document.getElementById("range");

range.addEventListener('change', displayCurrentRating);
range.addEventListener('input', displayCurrentRating);

function displayCurrentRating(){
    chosenValue.innerHTML = range.value;
}
