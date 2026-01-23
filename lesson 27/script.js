product = (a, b) => a * b;
try {
    document.getElementById("result").innerHTML = a;
}
catch(err) {
    document.getElementById("result").innerHTML = err.message;
}