add = function (num1, num2) {
  return num1 + num2;
};

substract = function (num1, num2) {
  return num1 - num1;
};

mul = function (num1, num2) {
  return num1 * num2;
};

div = function (num1, num2) {
  return num1 / num2;
};

square = function (num1) {
  return num1 * num1;
};

sum = function () {
  var s = 0;
  for (var i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
};
