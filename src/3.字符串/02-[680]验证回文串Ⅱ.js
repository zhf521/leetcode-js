/*
题目名称：验证回文串
题目地址：https://leetcode.cn/problems/valid-palindrome-ii/
 
给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

 

示例 1：

输入：s = "aba"
输出：true
示例 2：

输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
示例 3：

输入：s = "abc"
输出：false
 

提示：

1 <= s.length <= 105
s 由小写英文字母组成

*/

/* 思路：
解法一：若字符串本身不回文，则直接遍历整个字符串。遍历到哪个字符就删除哪个字符、同时对删除该字符后的字符串进行是否回文的判断，看看存不存在删掉某个字符后、字符串能够满足回文的这种情况

解法二：字符串题干中若有“回文”关键字，那么做题时脑海中一定要冒出两个关键字——对称性 和 双指针。这两个工具一起上，足以解决大部分的回文字符串衍生问题
我们首先是初始化两个指针，一个指向字符串头部，另一个指向尾部。如果两个指针所指的字符恰好相等，那么这两个字符就符合了回文字符串对对称性的要求，跳过它们往下走即可。如果两个指针所指的字符串不等。那么就意味着不对称发生了，意味着这是一个可以“删掉试试看”的操作点。我们可以分别对左指针字符和右指针字符尝试进行“跳过”，看看区间在 [left+1, right] 或 [left, right-1] 的字符串是否回文。如果是的话，那么就意味着如果删掉被“跳过”那个字符，整个字符串都将回文

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  //缓存字符串的长度
  const len = s.length
  // i、j分别为左右指针
  let i = 0,
    j = len - 1
  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++
    j--
  }
  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true
  }
  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true
  }
  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }
  // 默认返回 false
  return false
}

// 测试用例
let s = 'abcad'
console.time('执行用时')
console.log(validPalindrome(s))
console.timeEnd('执行用时')
