// Get elements
const button = document.querySelector("button");
const input = document.querySelector("input");

// Click event
button.addEventListener("click", function () {
    const phone = input.value.trim();

    // Validation
    if (phone === "") {
        alert("Please enter your phone number!");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;
    }

    // Success message
    alert("Thank you! We will call you soon.");

    // Clear input
    input.value = "";
});