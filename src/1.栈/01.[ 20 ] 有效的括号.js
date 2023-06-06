/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成


 */

// * 思路：发现越靠后的左括号，最先匹配，也就是后进先出的思想，于是考虑使用栈这个数据结构。首先判断输入的字符串是否是偶数个，如果不是偶数个，那么不匹配；然后遍历这个字符串，如果遇到左括号，则入栈，遇到右括号则判断栈顶元素是否与之匹配，如果匹配则出栈，否则返回false。最后判断栈是否为空，如果为空，则所有括号都匹配成功，返回true，否则返回false，注意"([}}])"这种情况

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
      stack.pop()
    } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop()
    } else return false
  }
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

// 测试用例
let test = '([}}])'

console.time('执行用时')
console.log(isValid(test))
console.timeEnd('执行用时')
