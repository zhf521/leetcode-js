/*
题目名称：用栈实现队列
题目地址：https://leetcode.cn/problems/implement-queue-using-stacks/
 
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
说明：

你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

示例 1：

输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

提示：

1 <= x <= 9
最多调用 100 次 push、pop、peek 和 empty
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）
 

进阶：

你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。

*/

/* 思路：
栈，后进先出；队列，先进先出。也就是说两者的进出顺序其实是反过来的。用栈实现队列，说白了就是用栈实现先进先出的效果，再说直接点，就是想办法让栈底的元素首先被取出，也就是让出栈序列被逆序

一个栈做不到的事情，我们用两个栈来做：

首先，准备两个栈：
把元素按顺序从 stack1 中出栈、然后入栈到 stack 2 里去
出队的时候直接对 stack2 执行出栈操作

如果 stack1 里入栈新元素

当新元素需要被出栈时，stack2 一定已经空掉了。当 stack2 为空、而 stack1 不为空时，我们需要继续把 stack1 中的元素转移到 stack2 中去，然后再从 stack2 里取元素。也就是说，所有的出队操作都只能依赖 stack2 来完成
 */

var MyQueue = function () {
  // 初始化两个栈
  this.stack1 = []
  this.stack2 = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 直接调度数组的 push 方法
  this.stack1.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length !== 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop())
    }
  }
  // 为了达到逆序的目的，我们只从 stack2 里出栈元素
  return this.stack2.pop()
}

/**
 * @return {number}
 * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
 */
MyQueue.prototype.peek = function () {
if (this.stack2.length <= 0) {
  // 当 stack1 不为空时，出栈
  while (this.stack1.length != 0) {
    // 将 stack1 出栈的元素推入 stack2
    this.stack2.push(this.stack1.pop())
  }
}
// 缓存 stack2 的长度
const stack2Len = this.stack2.length
return stack2Len && this.stack2[stack2Len - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 测试用例
let test =
console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
