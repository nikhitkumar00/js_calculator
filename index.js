function add() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 + n2;
    check(result);
}

function subtract() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 - n2;
    check(result);
}

function multiply() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 * n2;
    check(result);
}

function divide() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 / n2;
    check(result);
}

function exponent() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 ** n2;
    check(result);
}

function check(result) {
    if (isNaN(result)) {
        alert("Enter Valid Number");
        document.getElementById("answer").innerText = "Invalid Input";
        return;
    }
    document.getElementById("answer").innerText = result;
}
