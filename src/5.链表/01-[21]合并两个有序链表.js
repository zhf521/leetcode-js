/*
题目名称：合并两个有序链表
题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 


示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 

提示：
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

*/

/*思路：处理链表的本质，是处理链表结点之间的指针关系
两个链表如果想要合并为一个链表，我们恰当地补齐双方之间结点 next 指针的指向关系，就能达到目的
如果这么说仍然让你觉得抽象，那么大家不妨把图上的6个结点想象成6个扣子：现在的情况是，6个扣子被分成了两拨，各自由一根线把它们穿起来。而我们的目的是让这六个扣子按照一定的顺序，串到一根线上去。这时候需要咱们做的就是一个穿针引线的活儿，现在线有了，咱缺的是一根针
这根针每次钻进扣子眼儿之前，要先比较一下它眼前的两个扣子，选择其中值较小的那个，优先把它串进去。一次串一个，直到所有的扣子都被串进一条线为止
同时我们还要考虑 l1 和 l2 两个链表长度不等的情况：若其中一个链表已经完全被串进新链表里了，而另一个链表还有剩余结点，考虑到该链表本身就是有序的，我们可以直接把它整个拼到目标链表的尾部
*/

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode()
  // cur 这里就是咱们那根“针”
  let cur = head
  // “针”开始在 l1 和 l2 间穿梭了
  while (l1 && l2) {
    // 如果 l1 的结点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1 的结点
      cur.next = l1
      // l1 指针向前一步
      l1 = l1.next
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2
      // l2 向前一步
      l2 = l2.next
    }
    // “针”在串起一个结点后，也会往前一步
    cur = cur.next
  }
  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2
  // 返回起始结点
  return head.next
}

// 测试用例
let l1 = [],
  l2 = [0]

console.time('执行用时')
console.log(mergeTwoLists(l1, l2))
console.timeEnd('执行用时')
