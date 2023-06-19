/*
题目名称：反转字符串
题目地址：https://leetcode-cn.com/problems/reverse-string

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 

示例 1：

输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：

输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
 

提示：

1 <= s.length <= 105
s[i] 都是 ASCII 码表中的可打印字符

*/

//思路：直接调用数组的反转api实现，如果反转字符串：
/*定义被反转的字符串 
const str = 'hello'  
定义反转后的字符串
const res = str.split('').reverse().join('')
 console.log(res) // olleh */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const res = s.reverse()
  return res
};

// 测试用例
let s = ['h', 'e', 'l', 'l', 'o']

console.time('执行用时');
console.log(reverseString(s));
console.timeEnd('执行用时');