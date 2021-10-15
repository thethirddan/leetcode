/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */

/* 
Success
Runtime: 96 ms, faster than 90.67% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/
var lengthOfLongestSubstring = function(str) {
    let left = 0;
    let right = 0;
    let charSet = new Set();
    let maxLength = 0;
    while (right <= str.length) {
        if(charSet.has(str[right])) {
            const checkLength = right - left;
            maxLength = (maxLength > checkLength) ? maxLength : checkLength;
            charSet.delete(str[left]);
            left++;
        } else {
            charSet.add(str[right]);
            if (right == str.length) {
                const checkLength = right - left;
                maxLength = (maxLength > checkLength) ? maxLength : checkLength;
            }
            right ++;
        }
    }
    return maxLength;
};