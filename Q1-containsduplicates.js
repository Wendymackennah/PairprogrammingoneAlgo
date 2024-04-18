// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length
  }

console.log(containsDuplicate[1,1,3,4])