var addTwoNumbers = function (l1, l2) {
  const List = new ListNode(0);
  var sum = 0;
  var carry = 0;
  var head = List;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next; //as we started new list with 0 i.e. we return its next value
};
