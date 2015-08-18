/*Expect negative and decimal numbers too. For negative numbers,
return true if its absolute value is odd. For decimal numbers,
return true only if the number is equal to its integer part and the integer part is odd.
*/

function isOdd(n) {
  return (n+1) % 2 == 0;
}
