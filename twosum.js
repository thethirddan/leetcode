/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsTarget = new Map();
    let finalNumbers;
    nums.some((num, idx) => {
        const targetAnswer = numsTarget.get(num); 
        if(targetAnswer > -1 && (idx != targetAnswer)) {
            finalNumbers = [targetAnswer, idx];
            return true;
        }
        numsTarget.set(target - num, idx);
        return false;
    });
    
    return finalNumbers;
};
