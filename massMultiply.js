/*
Write a function to multiply a number (x) by a given number (y) a certain number of times (n). The results are to be returned in an array.

eg.
multiplyBy(2, 4, 6);
The output is: [8, 32, 128, 512, 2048, 8192]

NB: all arguments (x,y and n) will always be integers. Times (n) will always be a positive integer.
*/

function multiplyBy(x, y, n) {
  // Code goes here...

  var total = x*y;
  var results = [total];

  for(var i=1; i < n; i++) {
    total *= y;
    results.push(total)
  }

  return results;
};
