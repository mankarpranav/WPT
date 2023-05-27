function listeven() {
    var num = document.getElementById("id1").value;
    var temp = num;
    while (num > 0) {
        if ((num % 2==0) && (num <= temp)) {
            document.getElementById("result").innerHTML += num + "<br>";
        }
        num--;
    }
}