/*
题目名称：最小栈
题目地址：https://leetcode.cn/problems/min-stack/
 
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 

示例 1:
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 

提示：

-231 <= val <= 231 - 1
pop、top 和 getMin 操作总是在 非空栈 上调用
push, pop, top, and getMin最多被调用 3 * 104 次
*/

/* 思路：
重点在getMin
getMin 要做的事情，是从一个栈里找出其中最小的数字。我们仍然是抛砖引玉，先说一个大部分人都能想到的思路：

初始化一个最小值变量，它的初始值可以设一个非常大的数（比如 Infinity），然后开始遍历整个栈。在遍历的过程中，如果遇到了更小的值，就把最小值变量更新为这个更小的值。这样遍历结束后，我们就能拿到栈中的最小值了。

这个过程中，我们对栈进行了一次遍历，时间复杂度无疑是 O(n)

思路二：我们可以考虑再搞个栈（stack2）出来作为辅助，让这个栈去容纳当前的最小值。

如何确保 stack2 能够确切地给我们提供最小值？ 这里我们需要实现的是一个从栈底到栈顶呈递减趋势的栈（敲黑板！递减栈出现第二次了哈）：

取最小值：由于整个栈从栈底到栈顶递减，因此栈顶元素就是最小元素。

若有新元素入栈：判断是不是比栈顶元素还要小，否则不准进入 stack2。

若有元素出栈：判断是不是和栈顶元素相等，如果是的话，stack2 也要出栈。

 */

var MinStack = function () {
  this.stack = []
  // 定义辅助栈
  this.stack2 = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  // 若入栈的值小于当前最小值，则推入辅助栈栈顶
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= val) {
    this.stack2.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 测试用例
let test = console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
