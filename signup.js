document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form values
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const dob = document.getElementById('dob');
    const location = document.getElementById('location');
    const nid = document.getElementById('nid');
    const mobile = document.getElementById('mobile');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Function to show error message
    function showError(input, message) {
        const errorText = input.nextElementSibling;
        input.classList.add('error');
        errorText.textContent = message;
        input.classList.add('shake'); // Add shake animation
        setTimeout(() => input.classList.remove('shake'), 300);
        isValid = false;
    }

    // Function to clear error
    function clearError(input) {
        input.classList.remove('error');
        input.nextElementSibling.textContent = '';
    }

    // Validate First Name & Last Name
    if (firstName.value.trim() === '') showError(firstName, 'First name is required');
    else clearError(firstName);

    if (lastName.value.trim() === '') showError(lastName, 'Last name is required');
    else clearError(lastName);

    // Validate Gender
    if (gender.value === '') showError(gender, 'Please select a gender');
    else clearError(gender);

    // Validate Date of Birth
    if (dob.value === '') showError(dob, 'Please enter your date of birth');
    else clearError(dob);

    // Validate Location
    if (location.value.trim() === '') showError(location, 'Location is required');
    else clearError(location);

    // Validate NID (Must be 10-17 digits)
    const nidPattern = /^[0-9]{10,17}$/;
    if (!nidPattern.test(nid.value.trim())) showError(nid, 'NID must be 10-17 digits');
    else clearError(nid);

    // Validate Mobile Number (Must be 10-15 digits)
    const mobilePattern = /^[0-9]{10,15}$/;
    if (!mobilePattern.test(mobile.value.trim())) showError(mobile, 'Mobile number must be 10-15 digits');
    else clearError(mobile);

    // Validate Password (Minimum 6 characters)
    if (password.value.length < 6) showError(password, 'Password must be at least 6 characters');
    else clearError(password);

    // Validate Password Match
    if (password.value !== confirmPassword.value) showError(confirmPassword, "Passwords don't match");
    else clearError(confirmPassword);

    // If form is valid, show success message
    if (isValid) {
        alert(`🎉 Sign-up successful! Welcome, ${firstName.value}!`);
        document.getElementById('signup-form').reset(); // Clear form
    }
});
