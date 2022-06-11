//Method1
var containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};

//Method2
var containsDuplicate = function (nums) {
  return nums.sort().some((value, i) => value === nums[i - 1]);
};

//Method3
var containsDuplicate = function (nums) {
  let testObj = {};
  for (i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (testObj[curr]) return true;
    else {
      testObj[curr] = true;
    }
  }
  return false;
};
