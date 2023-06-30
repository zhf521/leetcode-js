/*
题目名称：反转链表
题目地址：https://leetcode-cn.com/problems/reverse-linked-list
 
 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：
输入：head = []
输出：[]

提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

*/

/* 思路：想办法把每个结点 next 指针的指向给反过来就行

我们需要用到三个指针，它们分别指向目标结点（cur）、目标结点的前驱结点（pre）、目标结点的后继结点（next）

只需要一个简单的cur.next = pre，就做到了 next 指针的反转

从第一个结点开始，每个结点都给它进行一次 next 指针的反转。到最后一个结点时，整个链表就已经被我们彻底反转掉了

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
var reverseList = function (head) {
  //初始化前驱结点为null
  let pre = null
  //初始化目标结点为头结点
  let cur = head
  //只要目标结点不为null，遍历就得继续
  while (cur !== null) {
    //记录一下next结点
    let next = cur.next
    //反转指针
    cur.next = pre
    //pre往前走一步
    pre = cur
    //cur往前走一步
    cur = next
  }
  //反转结束后，pre就会变成新链表的头结点
  return pre
}

// 测试用例
let test =
console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
