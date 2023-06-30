/*
题目名称：环形链表Ⅱ
题目地址：https://leetcode.cn/problems/linked-list-cycle-ii/
 
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点

示例 2：
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点

示例 3：
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环
 
提示：
链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 

进阶：你是否可以使用 O(1) 空间解决此题？
*/

/* 思路：
如果一个结点是环形链表成环的起点，那么它一定是第一个被发现 flag 标志已存在的结点。待我们遍历完这个环时，即便环上所有的结点都已经被立了 flag，但起点处的 flag 一定最先被我们定位到。因此，我们只需要在第一次发现 flag 已存在时，将对应的结点返回即可

双指针法：定义慢指针 slow，快指针 fast。两者齐头并进， slow 一次走一步、fast 一次 走两步。这样如果它们是在一个有环的链表里移动，一定有相遇的时刻

我们假设移动的次数为 t，slow 移动的路程就是t，fast 移动的路程为2t，假如环的长度为 s，那么当满足：2t-t=s条件时low 和 fast 就一定会相遇。反之，如果两者没有相遇，同时 fast 遍历到了链表的末尾，发现 next 指针指向 null，则链表中不存在环

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  //方法一
  // while (head) {
  //   if (head.flag) {
  //     return head
  //   } else {
  //     head.flag = true
  //     head = head.next
  //   }
  // }
  // return null

  //方法二
  let fast = head,
    low = head // 首先，都从头节点出现
  while (fast) {
    // 确保存在环
    if (fast.next == null) return null // fast.next 为null表示无环
    low = low.next // 慢指针走一步
    fast = fast.next.next // 快指针走两步
    if (low == fast) {
      // 初次相遇
      fast = head // 快指针回到头节点
      while (true) {
        if (fast == low) {
          return low
        }
        fast = fast.next // 快慢指针一起走
        low = low.next
      }
    }
  }
  return null
};

// 测试用例
let test = console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
