/*
Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
*/


function cubeSum(n, m){

    var range = function (a,b) {
      var base = Math.min(a,b) + 1
      return Array.apply(null, new Array(Math.abs(a-b)))
        .map(function(e,i) { return i+base })
    }

    var sum = range(n,m).map(function(x){ return Math.pow(x,3) })
      .reduce(function(left,right){ return left+right })

    return sum

}
