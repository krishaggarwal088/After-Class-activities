// Get elements
var current_balance_el = document.getElementById("balance");
var entered_amount_el = document.getElementById("amount");

// Credit Function
function creditAmount() {

    var account_balance = 
        parseInt(current_balance_el.innerText) + 
        parseInt(entered_amount_el.value);

    if (isNaN(account_balance)) {
        alert("Enter valid amount");
        return;
    }

    // REQUIRED LINE
    current_balance_el.innerHTML = parseInt(account_balance);

    entered_amount_el.value = "";
}

// Debit Function
function debitAmount() {

    var current_balance = parseInt(current_balance_el.innerText);
    var entered_amount = parseInt(entered_amount_el.value);

    if (isNaN(entered_amount) || entered_amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (entered_amount > current_balance) {
        alert("Insufficient Balance");
        return;
    }

    // Subtract
    var account_balance = current_balance - entered_amount;

    // REQUIRED LINE
    current_balance_el.innerHTML = parseInt(account_balance);

    entered_amount_el.value = "";
}