function init(process) {
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  process === 1
    ? add(n1, n2)
    : process === 2
    ? subtract(n1, n2)
    : process === 3
    ? multiply(n1, n2)
    : process === 4
    ? divide(n1, n2)
    : exponent(n1, n2);
}

function add(n1, n2) {
  var result = n1 + n2;
  check(result);
}

function subtract(n1, n2) {
  var result = n1 - n2;
  check(result);
}

function multiply(n1, n2) {
  var result = n1 * n2;
  check(result);
}

function divide(n1, n2) {
  if (n2 == 0) {
    document.getElementById("answer").innerText =
      "Division By Zero not Possible";
    alert("Division By Zero not Possible");
    return;
  }
  var result = n1 / n2;
  check(result);
}

function exponent(n1, n2) {
  var result = n1 ** n2;
  check(result);
}

function check(result) {
  if (isNaN(result)) {
    document.getElementById("answer").innerText = "Invalid Input";
    alert("Enter Valid Number");
    return;
  }
  document.getElementById("answer").innerText = result;
}
