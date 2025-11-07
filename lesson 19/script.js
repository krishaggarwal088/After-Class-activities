function multiply(a, b) {

if (b === undefined) {

alert("The value of b is undefined");

b = 5;

}

var result = a * b;

document.getElementById("result").innerHTML = result;

}