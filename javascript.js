const form = document.getElementById("my-form");
const pw = document.getElementById("pw");
const pwConfirmation = document.getElementById("pw-confirmation");
const pwLengthWarning = document.getElementById("pw-length-warning");
const pwMatchWarning = document.getElementById("pw-match-warning");
const phoneNumber = document.getElementById("phone-number");


pw.addEventListener("input", () => {
    if (pw.validity.tooShort) pwLengthWarning.textContent = "Your password should be at least 6 characters long";
    else pwLengthWarning.textContent = "";

    if (pw.value !== pwConfirmation.value && pwConfirmation.value !== "") {
        pwMatchWarning.textContent = "Passwords do not match";
        pwConfirmation.setCustomValidity("Passwords do not match");
    } else {
        clearValidity(pwMatchWarning,pwConfirmation);
    }
})

pwConfirmation.addEventListener("input", () => {
    if (pwConfirmation.value === "") {
        clearValidity(pwMatchWarning,pwConfirmation);
        return;
    }
    if (pw.value!==pwConfirmation.value) {
        pwMatchWarning.textContent = "Passwords do not match";
        pwConfirmation.setCustomValidity("Passwords do not match");
    } else {
        clearValidity(pwMatchWarning,pwConfirmation);
    }
})

phoneNumber.addEventListener("input", () => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumber.setCustomValidity("Please match the phone number format. Example: 111-222-3333");
    } else phoneNumber.setCustomValidity("");
})

function clearValidity (message,input) {
    message.textContent = "";
    input.setCustomValidity("");
}