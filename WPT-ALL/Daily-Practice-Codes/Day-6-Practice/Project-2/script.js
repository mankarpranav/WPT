function printonscreen() {
    var rotations = document.getElementById("id1").value;
    var string = document.getElementById("id2").value;

    for (var i = 0; i < rotations; i++) {
        document.getElementById("disp").innerHTML += i+" "+string +"<br>";
    }
}