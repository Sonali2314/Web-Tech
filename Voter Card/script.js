function validateForm() {
    let valid = true;

    // Clear errors if you want to reset them
    // clearErrors();

    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Full Name is required.";
        alert("Please Enter full name ");
        valid = false;
    }

    const age = document.getElementById("age").value;
    if (age === "" || age < 18) {
        document.getElementById("ageError").textContent = "Age must be at least 18.";
        alert("Enter Valid Age ");
        valid = false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        alert("Enter valid email id");
        valid = false;
    }

    const address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        alert("Enter Address");
        valid = false;
    }

    const dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        valid = false;
        alert("Enter DOB");
    }

    if (!valid) {
        return false;
    }

    // If everything is valid, show the success popup
    document.getElementById("successPopup").style.display = "flex";
    return false; // Prevent form from actually submitting for demonstration purposes
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}
