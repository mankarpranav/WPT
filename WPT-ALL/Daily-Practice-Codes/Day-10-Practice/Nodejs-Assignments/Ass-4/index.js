// 4) Write a Node program that prints all the numbers between 1 and 100, each on a separate line. A
// few caveats:
//  if the number is divisible by 3, print “fizz”
//  if the number is divisible by 5, print “buzz”
//  if the number is divisible by both 3 and 5, print “fizzbuzz”

console.log("Printing Numbers Between 1-100 -->");
console.log();

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} : fizzbuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} : fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} : buzz`);
  }
}
