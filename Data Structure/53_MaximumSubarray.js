//Kadane's Method-

var maxSubArray = function (nums) {
  let currSum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    maxSum = Math.max(currSum, maxSum);
    currSum = Math.max(currSum, 0);
  }
  return maxSum;
};
