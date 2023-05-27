function operate() {
  var str = document.getElementById("id1").value;
  var pat = document.getElementById("id2").value;
  var res, ind;
  var regobj = new RegExp(pat, "gi");
  var arr = document.getElementsByName("string");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      var v = arr[i].value;
      break;
    }
  }

  switch (v) {
    case "search":
      ind = str.search(regobj);
      document.getElementById("result").innerHTML =
        "Pattern '" + pat + "' Found At Index: " + ind;
      break;

    case "match":
      res = str.match(regobj);
      document.getElementById("result").innerHTML = "Matched Pattern: " + res;
      break;

    case "test":
      res = regobj.test(str);
      document.getElementById("result").innerHTML =
        "Is Pattern Available: " + res;
      break;

    case "replace":
      var newstr = prompt("Enter New String: ");
      res = str.replace(regobj, newstr);
      document.getElementById("result").innerHTML =
        "After Replace String is: " + res;
      break;
  }
}
