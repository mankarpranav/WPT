function calpower() {
    var num = document.getElementById("id1").value;
    var pow = document.getElementById("id2").value;

    var temp = pow;
    var power = 1;
    while (temp > 0) {
        power = power * num;
        temp--;
    }
    document.getElementById("id4").innerHTML = num+" ^ "+pow + " is: "+power;
}