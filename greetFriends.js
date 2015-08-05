function greetingForAllFriends(friends){
  if (!(typeof friends != "undefined" && friends != null && friends.length > 0)){ return null }
  return friends.map(function (x){ return "Hello, " + x + "!"})
}
