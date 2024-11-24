/**
 * 876. Middle of the Linked List (https://leetcode.com/problems/middle-of-the-linked-list)
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.

 * If there are two middle nodes, return the second middle node.

 * Example 1:

 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * Example 2:

 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 * Constraints:

 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  console.log(slow);
  console.log(fast);

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

/**
 * 1
 * 2
 * 
 * 2
 * 4
 * 
 * 3
 * 6
 * 
 * 4 // this is the middle node
 * null
 */



// Example Linked List: [1, 2, 3, 4, 5]
const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

console.log(middleNode(head)); // 4 -> 5 -> 6
