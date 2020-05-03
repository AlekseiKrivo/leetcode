/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let firstEl = 0;
     let secondEl = 0;
    for(let numIndex in nums) {
        let secondIndex = nums.findIndex(n => nums[numIndex] + n === target && numIndex != nums.indexOf(n));
        if(secondIndex != -1) {
            firstEl = numIndex;
            secondEl = secondIndex;
            break;
        }
        else continue;
    }
     return [firstEl, secondEl];
 };