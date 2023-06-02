fact = function (num) {
  var f = 1;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  return f;
};

myprime = function (num) {
  if (num <= 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

printable = function (num) {
  console.log("Table of Given Number : ");
  for (i = 1; i <= 10; i++) {
    console.log(i * num);
  }
};
