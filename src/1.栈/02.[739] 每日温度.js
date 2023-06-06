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

// * 思路：单调栈，单调栈用途不太广泛，只处理一类典型的问题，比如「下一个更大元素」，「上一个更小元素」等


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = []
  //初始化气温列表，默认值为0
  let res = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    //将栈顶元素下标对应的值和当前元素进行比较
    while (
      temperatures[i] > temperatures[stack[stack.length - 1]] &&
      stack.length
    ) {
      let idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
}

// 测试用例
let test = [73, 74, 75, 71, 69, 72, 76, 73]

console.time('执行用时')
console.log(dailyTemperatures(test))
console.timeEnd('执行用时')
