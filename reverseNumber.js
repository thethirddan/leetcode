/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    const negative = (x < 0) ? -1 : 1;
    let n = x.toString().split("");
    for(let i =0; i < (n.length / 2); i++) {
        let j = n.length - 1 - i;
        [n[i], n[j]] = [n[j], n[i]]
    }
    let finalNumber = parseInt(n.join(""));    
    return finalNumber < (2 ** 31) ? finalNumber * negative : 0;
};