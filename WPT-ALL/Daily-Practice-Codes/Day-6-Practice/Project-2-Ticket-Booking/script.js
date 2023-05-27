arr = [];
function showbookedseats() {
  document.getElementById("bookedarr").innerHTML = arr;
}
function getbookedseats(ev) {
  if (ev.target.checked) {
    arr.push(ev.target.value);
    console.log(arr);
  }
}
