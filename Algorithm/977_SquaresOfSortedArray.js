//Map approach
var sortedSquares = function (nums) {
  const squared = nums.map((value) => {
    return value * value;
  });
  return squared.sort((a, b) => a - b);
};

//Two pointer method-

var sortedSquares = function (nums) {
  let arr = [];
  let left = 0;
  let right = nums.length - 1;
  let pointer = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      arr[pointer--] = nums[left++] ** 2;
    } else {
      arr[pointer--] = nums[right--] ** 2;
    }
  }
  return arr;
};
