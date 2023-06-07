/**
 * * 题目名称：每日温度
 * * 题目地址：https://leetcode.cn/problems/daily-temperatures/
 
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

 
示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]
 

提示：

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

 */

// * 思路：单调栈，单调栈用途不太广泛，只处理一类典型的问题，比如「下一个更大元素」，「上一个更小元素」等。首先我们如果求的是下一个更大的元素，那么，我们将维护一个单调递增的栈，栈里面存放的是遍历过的数据的下标，我们依次比较栈顶元素和temperatures数组里的元素，如果数组里的元素大于栈顶元素，则栈顶元素出栈，我们将栈顶元素的下标减去当前元素的下标，把结果存放到结果数组中即可，如果小于等于，则入栈

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0)
  let stack = []
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
}

// 测试用例
let test = [30, 60, 90]

console.time('执行用时')
console.log(dailyTemperatures(test))
console.timeEnd('执行用时')
