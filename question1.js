//Question 1

// Write code that checks that the lastName input's value is at least 5 characters long when the form is submitted.

// Show/hide the error message every time the validation runs.



const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none"; //No error message if the last name has minimum 5 characters
    } else {
        lastNameError.style.display = "block";
    }

}


function checkInputLength(value) {

    const trimmedValue = value.trim();

    if (trimmedValue.length > 4) {
        return true;
    } else {
        return false;
    }
}

