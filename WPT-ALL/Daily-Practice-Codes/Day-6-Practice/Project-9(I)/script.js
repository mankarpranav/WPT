var Principal = document.getElementById("id1").value;
var interest = document.getElementById("id2").value;
var period = document.getElementById("id3").value;

var Compound = Principal(1 + (interest / period));
document.write(Compound);