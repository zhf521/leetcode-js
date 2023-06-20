/*
题目名称：删除排序链表中的重复元素 II
题目地址：https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
 
给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 

示例 1：
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]

示例 2：
输入：head = [1,1,1,2,3]
输出：[2,3]
 

提示：
链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序 排列

*/

/* 思路：在链表题中，经常会遇到这样的问题：链表的第一个结点，因为没有前驱结点，导致我们面对它无从下手。这时我们就可以用一个 dummy 结点来解决这个问题。 所谓 dummy 结点，就是咱们人为制造出来的第一个结点的前驱结点，这样链表中所有的结点都能确保有一个前驱结点，也就都能够用同样的逻辑来处理了。 dummy 结点能够帮助我们降低链表处理过程的复杂度，处理链表时，不设 dummy 结点思路可能会打不开；设了 dummy 结点的话，就算不一定用得上，也不会出错

我们首先要做的就是定义一个 dummy 结点，指向链表的起始位置
这样一来，如果想要删除两个连续重复的值为 1 的结点，我们只需要把 dummy 结点的 next 指针直接指向 2

注意：由于重复的结点可能不止一个两个，我们这里需要用一个 while 循环来反复地进行重复结点的判断和删除操作
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) {
    return head
  }
  // dummy 登场
  let dummy = new ListNode()
  // dummy 永远指向头结点
  dummy.next = head
  // cur 从 dummy 开始遍历
  let cur = dummy
  // 当 cur 的后面有至少两个结点时
  while (cur.next && cur.next.next) {
    // 对 cur 后面的两个结点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next
      }
    } else {
      // 若不重复，则正常遍历
      cur = cur.next
    }
  }
  // 返回链表的起始结点
  return dummy.next
}

// 测试用例
let test = [1, 1, 1, 2, 3]
console.time('执行用时')
console.log(deleteDuplicates(test))
console.timeEnd('执行用时')
