//Create a function that calculates the sum of the two lowest numbers given an array of positive integers.

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(sortNumbers);
  return numbers.shift() + numbers.shift();
};

function sortNumbers(a,b){
  return a - b;
};
