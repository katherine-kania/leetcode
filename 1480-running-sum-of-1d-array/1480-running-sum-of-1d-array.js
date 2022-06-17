/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // define a new array for our updated values
    let newNums = new Array(nums.length)
    
    // first index is the same 
    newNums[0] = nums[0]
    
    // iterate through the nums array starting at 1
    for(let i=1; i < nums.length; i++){
        // for every iteration, add each element to the previous number
        newNums[i] = newNums[i-1] + nums[i]
    }
    return newNums
};