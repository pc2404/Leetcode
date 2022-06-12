//Insert method

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

//Hash table method
//here we find ele in hash table

var twoSum = function (nums, target) {
  let hash = {}; //value:key
  for (let i = 0; i <= nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};
