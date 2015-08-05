function sumTwoSmallestNumbers(numbers) {
  numbers.sort(sortNumbers);
  return numbers.shift() + numbers.shift();
};

function sortNumbers(a,b){
  return a - b;
};
