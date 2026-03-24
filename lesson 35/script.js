// Get elements
var current_balance_el = document.getElementById("balance");
var entered_amount_el = document.getElementById("amount");

// Credit Function
function creditAmount() {

    var entered_amount = parseInt(entered_amount_el.value);

    // ✅ Validation 1: Empty input
    if (entered_amount_el.value === "") {
        alert("Please enter amount.");
        return;
    }

    // ✅ Validation 2: Amount <= 0
    if (entered_amount <= 0) {
        alert("Please enter amount greater than 0");
        return;
    }

    // Add amount (REQUIRED STYLE)
    var account_balance = 
        parseInt(current_balance_el.innerText) + entered_amount;

    current_balance_el.innerHTML = parseInt(account_balance);

    entered_amount_el.value = "";
}

// Debit Function
function debitAmount() {

    var entered_amount = parseInt(entered_amount_el.value);
    var current_balance = parseInt(current_balance_el.innerText);

    // ✅ Validation 1: Empty input
    if (entered_amount_el.value === "") {
        alert("Please enter amount.");
        return;
    }

    // ✅ Validation 2: Amount <= 0
    if (entered_amount <= 0) {
        alert("Please enter amount greater than 0");
        return;
    }

    // ✅ Validation 3: Insufficient balance
    if (entered_amount > current_balance) {
        alert("You don't have balance. Please enter lesser amount.");
        return;
    }

    // Subtract
    var account_balance = current_balance - entered_amount;

    current_balance_el.innerHTML = parseInt(account_balance);

    entered_amount_el.value = "";
}