//Two pointer
var merge = function (nums1, m, nums2, n) {
  let count = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[count++];
  }
  return nums1.sort((a, b) => a - b);
};
