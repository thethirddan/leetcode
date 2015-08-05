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
