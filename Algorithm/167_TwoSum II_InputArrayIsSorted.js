//Two pointer-
var twoSum = function (numbers, target) {
  let end = numbers.length - 1;
  let start = 0;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
};
