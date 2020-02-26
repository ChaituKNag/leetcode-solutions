/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var curr = head;

  if (!curr) return head;

  while (curr.next !== null) {
    if (!curr.next) return head;
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

var list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);

console.log(JSON.stringify(deleteDuplicates(list), null, 2));
