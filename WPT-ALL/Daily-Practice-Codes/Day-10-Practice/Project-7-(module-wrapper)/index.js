//

console.log("inside index.js from Project-7");

(function () {
  const avengers = "Tony";
  console.log(avengers);
})();

(function () {
  const avengers = "Spider-Man";
  console.log(avengers);
})();

//Lets level up -->

(function (message) {
  const avengers = "Tony-Stark";
  console.log(message + avengers);
})("Hello ");

(function (message) {
  const avengers = "Spider-Man";
  console.log(message + avengers);
})("Hey ");
