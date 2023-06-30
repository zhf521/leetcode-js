/*
题目名称：全排列
题目地址：https://leetcode.cn/problems/permutations/
 
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

*/

/* 思路：
在这个变化的序列中，不变的是什么——是不是坑位的数量？拿示例来说，不管我怎么调整数字的顺序，它们都只能围着这 3 个坑打转。当我们感到变化难以把握时，不如尝试先从不变的东西入手

现在问题变成了，我手里有 3 个数，要往这 3 个坑里填，有几种填法？我们一个一个坑来看：
Step1:面对第一个坑，我有3种选择：填1、填2、填3，随机选择其中一个填进去即可。
Step2：面对第二个坑，由于 Step1 中已经分出去1个数字，现在只剩下2个选择：比如如果 Step1 中填进去的是 1，那么现在就剩下2、3；如果 Step1 中填进去的是 2，那么就剩下 1、3。
Step3： 面对第三个坑，由于前面已经消耗了2个数字，此时我们手里只剩下 1 个数字了。所以说第 3 个坑是毫无悬念的，它只有1种可能

在以上的“填坑”过程中，我们重复地做了以下事情：
检查手里剩下的数字有哪些
选取其中一个填进当前的坑里

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //缓存数组的长度
  const len = nums.length
  //curr变量用来记录当前的排列内容
  const curr = []
  //res 用来记录所有的排列顺序
  const res = []
  // visited 用来避免重复使用同一个数字
  const visited = {}
  // 定义 dfs 函数，参数是坑位的索引（从 0 计数）
  function dfs(nth) {
    // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
    if (nth === len) {
      // 此时前 len 个坑位已经填满，将对应的排列记录下来
      res.push(curr.slice())
      return
    }
    // 检查手里剩下的数字有哪些
    for (let i = 0; i < len; i++) {
      // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
      if (!visited[nums[i]]) {
        // 给 nums[i] 打个“已用过”的标
        visited[nums[i]] = 1
        // 将nums[i]推入当前排列
        curr.push(nums[i])
        // 基于这个排列继续往下一个坑走去
        dfs(nth + 1)
        // nums[i]让出当前坑位
        curr.pop()
        // 下掉“已用过”标识
        visited[nums[i]] = 0
      }
    }
  }
  // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
  dfs(0)
  return res
}

// 测试用例
let test = ''
console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
