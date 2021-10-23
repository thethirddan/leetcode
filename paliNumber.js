/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

var isPalindrome = function(numb) {
    const strNumb = numb.toString();
    let isPal = true;

    //This could even be refactored into an Array.every solution
    for(let i=0; i <= (strNumb.length/2); i++){ 
        let j = strNumb.length -1 -i;
        if (strNumb[i] != strNumb[j]) {
           isPal= false; 
        }
    }
    return isPal;
};