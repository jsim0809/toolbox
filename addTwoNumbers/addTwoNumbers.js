/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = (val = 0, next = null) => {
  this.val = val;
  this.next = next;
}

const addTwoNumbers = (l1, l2) => {
  const sum = ListNode();
  let pointer = sum;
  while (l1 !== null || l2 !== null) {
    pointer.val = l1.val + l2.val;
    if ((l1.val + l2.val) >= 10) {
      pointer.next = ListNode(1, null);
    } else {
      pointer.next = ListNode(0, null);
    }
    
  }
}