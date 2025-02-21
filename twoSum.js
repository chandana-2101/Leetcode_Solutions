//Given solution is array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
//it has exactly one solution and not use the same element twice

//You may assume that each input would have exactly one solution, and you may not use the same element twice
const nums = [2, 7, 11, 15];
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

twoSum(nums, 9);
