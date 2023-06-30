/*
题目名称：反转链表 II
题目地址：https://leetcode.cn/problems/reverse-linked-list-ii/
 
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 
 

示例 1：
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

示例 2：
输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：
链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

进阶： 你可以使用一趟扫描完成反转吗？

*/

/* 思路：
假如我们需要反转的是链表的第 2-4 之间的结点，4指3，3指2，这都没问题，关键在于，如何让1指向4、让2指向5呢？这就要求我们在单纯的重复“逆序”这个动作之外，还需要对被逆序的区间前后的两个结点做额外的处理

由于我们遍历链表的顺序是从前往后遍历，那么为了避免结点1和结点2随着遍历向后推进被遗失，我们需要提前把1结点缓存下来。而结点5就没有这么麻烦了：随着遍历的进行，当我们完成了结点4的指针反转后，此时 cur 指针就恰好指在结点5上

此时我们直接将结点2的 next 指针指向 cur、将结点1的 next 指针指向 pre 即可

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  //定义pre、cur,用leftHead来承接整个区间的前驱结点
  let pre, cur, leftHead
  const dummy = new ListNode()
  //dummy后继结点是头结点
  dummy.next = head
  //p是一个游标，用于遍历，最初指向dummy
  let p = dummy
  //p往前走left-1步，走到整个区间的前驱结点处
  for (let i = 0; i < left - 1; i++) {
    p = p.next
  }
  //缓存这个前驱结点到leftHead里
  leftHead = p
  //start是反转区间的第一个结点
  let start = leftHead.next
  //pre指向start
  pre = start
  //cur指向start的下一个结点
  cur = pre.next
  //开始重复反转动作
  for (let i = left; i < right; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  //leftHead的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre
  //将区间内反转后的最后一个结点next指向cur
  start.next = cur
  //dummy.next永远指向链表头结点
  return dummy.next
}

// 测试用例
let test =
console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
