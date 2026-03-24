let balance = 0;

function creditAmount() {
    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    balance += Number(amount);
    updateBalance();
    clearInput();
}

function debitAmount() {
    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance");
        return;
    }

    balance -= Number(amount);
    updateBalance();
    clearInput();
}

function updateBalance() {
    document.getElementById("balance").innerText =
        "Your Account Balance is: Rs." + balance;
}

function clearInput() {
    document.getElementById("amount").value = "";
}