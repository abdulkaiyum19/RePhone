// Animate increasing numbers
document.addEventListener("DOMContentLoaded", function () {
    const numberElements = document.querySelectorAll(".number");

    numberElements.forEach((element) => {
        const target = parseInt(element.getAttribute("data-target"));
        let count = 0;
        const increment = target / 100;

        const updateNumber = () => {
            if (count < target) {
                count += increment;
                element.textContent = Math.ceil(count);
                setTimeout(updateNumber, 20);
            } else {
                element.textContent = target + "+";
            }
        };

        updateNumber();
    });
});
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const location = document.getElementById("location").value.trim();
    const nid = document.getElementById("nid").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let gender = "";
    if (document.getElementById("male").checked) gender = "Male";
    if (document.getElementById("female").checked) gender = "Female";
    if (document.getElementById("other").checked) gender = "Other";

    if (!firstName || !lastName || !email || !dob || !location || !nid || !mobile || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`🎉 Welcome ${firstName}! Your account has been created successfully.`);
    document.getElementById("signup-form").reset();
});
