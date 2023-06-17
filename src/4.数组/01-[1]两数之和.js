/**
题目名称：两数之和
题目地址：https://leetcode-cn.com/problems/two-sum
 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 
 
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
 

进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？

*/

// 思路：两层循环遍历同一个数组，结果为target时即输出结果，优化：空间换时间，记住一个结论：几乎所有的求和问题，都可以转化为求差问题，我们可以在遍历数组的过程中，增加一个 hashMap(哈希表) 来记录已经遍历过的数字及其对应的索引值。然后每遍历到一个新数字的时候，都回到 hashMap 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。若出现过，那么答案已然显现，我们就不必再往下走了,hashMap 中key存遍历的元素，value存索引

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         if (i !== j) {
//           return [i, j]
//         }
//       }
//     }
//   }
// }

// var twoSum = function (nums, target) {
//   const hashMap = {}
//   for (let i = 0; i < nums.length; i++) {
//     // 判断当前值对应的 target 差值是否存在（是否已遍历过）
//     if (hashMap[target - nums[i]] !== undefined) {
//       // 若有对应差值，返回答案
//       return [hashMap[target - nums[i]], i]
//     }
//     // 若没有对应差值，则记录当前值
//     hashMap[nums[i]] = i
//   }
// }
var twoSum = function (nums, target) {
  const hashmap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (hashmap.has(diff)) {
      return [hashmap.get(diff), i]
    }
    hashmap.set(nums[i], i)
  }
}

// 测试用例
let test1 = [2, 5, 5, 11]
let test2 = 13

console.time('执行用时')
console.log(twoSum(test1, test2))
console.timeEnd('执行用时')
