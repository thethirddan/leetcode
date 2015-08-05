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
