function table() {
    document.getElementById("result").innerHTML = " ";
    var num = document.getElementById("id1").value;
    for (var i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += " " + i + "*" + num + "=" + (i * num) + "<br>";
    }
}