function calculate() {
  var num1 = parseInt(document.getElementById("id1").value);
  var num2 = parseInt(document.getElementById("id2").value);
  var operator = document.getElementById("id3").value;
  var res = 0;

  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
  }
  document.getElementById("Result").innerHTML = res;
}
