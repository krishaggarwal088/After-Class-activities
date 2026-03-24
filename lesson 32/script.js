// PAGE SWITCHING
function showPage(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = "<h3>Welcome</h3><p>Welcome to Fooddddie's Kitchen.</p>";
    }
    else if (page === "about") {
        content.innerHTML = "<h3>About Us</h3><p>We serve fresh and delicious food every day.</p>";
    }
    else if (page === "menu") {
        content.innerHTML = "<h3>Menu</h3><p>Pizza | Burger | Pasta | Drinks</p>";
    }
    else if (page === "contact") {
        content.innerHTML = "<h3>Contact</h3><p>Phone: 1234567890<br>Email: food@kitchen.com</p>";
    }
}

// BOOKING FUNCTION
function bookNow() {
    const input = document.getElementById("phoneInput");
    const phone = input.value.trim();

    if (phone === "") {
        alert("Please enter your phone number!");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;
    }

    alert("Thank you! We will call you soon.");
    input.value = "";
}

// OFFER BUTTON
function showOffer() {
    alert("🎉 20% Discount Today!");
}