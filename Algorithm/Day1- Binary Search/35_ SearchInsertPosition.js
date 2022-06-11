var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2); // right low mid

    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } //exclude mid
    else {
      low = mid + 1;
    } //exclude mid
  }
  return low;
};
