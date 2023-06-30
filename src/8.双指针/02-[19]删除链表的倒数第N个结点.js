/*
题目名称：删除链表的倒数第 N 个结点
题目地址：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点

示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：
输入：head = [1], n = 1
输出：[]

示例 3：
输入：head = [1,2], n = 1
输出：[1]
 

提示：
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？

*/

/* 思路：
遍历不可能从后往前走，因此这个“倒数第 N 个” 咱们完全可以转换为“正数第 len - n + 1"个。这里这个 len 代表链表的总长度，比如说咱们链表长为 7，那么倒数第 1 个就是正数第 7 个。按照这个思路往下分析，如果走直接遍历这条路，那么这个 len 就非常关键了。

我们可以直接遍历两趟：第一趟，设置一个变量 count = 0，每遍历到一个不为空的结点，count 就加 1，一直遍历到链表结束为止，得出链表的总长度 len；根据这个总长度，咱们就可以算出倒数第 n 个到底是正数第几个了（M = len - n + 1），那么我们遍历到第 M - 1（也就是 len - n） 个结点的时候就可以停下来，执行删除操作

不过这种超过一次的遍历必然需要引起我们的注意

首先两个指针 slow 和 fast，全部指向链表的起始位——dummy 结点

快指针先出发！闷头走上 n 步，在第 n 个结点处打住

然后，快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来

此时，慢指针所指的位置，就是倒数第 n 个结点的前一个结点

链表删除问题中，若走两次遍历，我们做了两件事：

求长度
做减法，找定位

若用快慢指针，我们其实是把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“n”上（用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆），这样当快指针走到链表末尾（第 len 个）时，慢指针刚好就在 len - n 这个地方稳稳落地

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 初始化 dummy 结点
  const dummy = new ListNode()
  // dummy指向头结点
  dummy.next = head
  //初始化快慢指针，均指向dummy
  let fast = dummy
  let slow = dummy
  //快指针走n步
  while (n !== 0) {
    fast = fast.next
    n--
  }

  //快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow =slow.next
  } 
  //慢指针删除自己的后继结点
  slow.next = slow.next.next
  //返回头结点
  return dummy.next
};


// 测试用例
let head = [1, 2, 3, 4, 5],
  n = 2
  console.time('执行用时')
console.log(removeNthFromEnd(head,n))
console.timeEnd('执行用时')
