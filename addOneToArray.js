function upArray(arr){
  if (arr.length == 0) {
    return null
  }

  var rev_arr = arr.reverse()
  var add_one = true

  for(var i=0; i < rev_arr.length; i++){
    if (rev_arr[i] < 0 || rev_arr[i] > 9) { return null }
    if (add_one == true){
      rev_arr[i]++
      if (rev_arr[i] > 9){
        rev_arr[i] = 0
        add_one = true
      } else {
        add_one = false
      }
    }
  }

  if (add_one == true){
    rev_arr.push(1)
  }

  return rev_arr.reverse()
}
