/**
题目名称：子数组的最小值之和
题目地址：https://leetcode.cn/problems/sum-of-subarray-minimums/
 
给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。

 

示例 1：

输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
示例 2：

输入：arr = [11,81,94,43,3]
输出：444
 

提示：

1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104

*/

// 思路：单调栈，维护一个单调栈，两个数组来接受遍历的数组的左侧和右侧第一个比它小的元素

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let mod = 1e9 + 7
  let n = arr.length
  let left = new Array(n),
    right = new Array(n)
  let stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop()
    }
    left[i] = stack.length == 0 ? -1 : stack[stack.length - 1]
    stack.push(i)
  }
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop()
    }
    right[i] = stack.length == 0 ? n : stack[stack.length - 1]
    stack.push(i)
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans += arr[i] * (i - left[i]) * (right[i] - i)
  }
  return (ans %= mod)
}

// 测试用例
let test = [71, 55, 82, 55]
console.time('执行用时')
console.log(sumSubarrayMins(test))
console.timeEnd('执行用时')
