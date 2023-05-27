function largest() {
    var a = document.getElementById("id1").value;
    var b = document.getElementById("id2").value;
    var c = document.getElementById("id3").value;
    if (a > b) {
        if (a > c)
            document.getElementById("Answer").innerHTML = "Largest Among Three :" + a;
        else
            document.getElementById("Answer").innerHTML = "Largest Among Three :" + c;

    } else {
        if (b > c)
            document.getElementById("Answer").innerHTML = "Largest Among Three :" + b;
        else
            document.getElementById("Answer").innerHTML = "Largest Among Three :" + c;
    }
}