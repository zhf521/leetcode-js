/*
题目名称：删除排序链表中的重复元素
题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

示例 1：
输入：head = [1,1,2]
输出：[1,2]

示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]
 

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序 排列

*/

/*思路：将需要删除的目标结点的前驱结点 next 指针往后指一格
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
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head
  // 遍历链表
  while (cur != null && cur.next != null) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next
    } else {
      // 若不重复，继续遍历
      cur=cur.next
    }
  }
  return head
};

// 测试用例
let head = [1, 1, 2, 3, 3]

console.time('执行用时');
console.log(deleteDuplicates(head))
console.timeEnd('执行用时');