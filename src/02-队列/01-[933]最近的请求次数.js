/*
题目名称：最近的请求次数
题目地址：https://leetcode.cn/problems/number-of-recent-calls/
 
写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

 

示例 1：

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 

提示：

1 <= t <= 109
保证每次对 ping 调用所使用的 t 值都 严格递增
至多调用 ping 方法 104 次

*/

/* 思路：
首先结合题目分析一下具体要做什么，返回在[t - 3000, t]的请求数：

看示例，[1 - 3000, 1]也就是[0, 1]只有1这个值，所以返回1；
[100 - 3000, 100]也就是[0, 100]中有1和100，所以返回2；
[3001 - 3000, 3001]也就是[1, 3001]中有1,100,3001，所以返回3；
[3002 - 3000, 3002]也就是[2, 3002]中有100,3001,3002，所以返回3；
最后的区间中，1这个值过期了，所以他不在区间内，因为 1 是最先请求的，也是最先过期的，看到这种性质是不是和队列很像。

越早发出的请求越早不在最近3000ms内的请求里，满足先进先出，考虑用队列
有新请求就入队，3000ms前发出的请求出队
队列的长度就是最近请求次数
 */

var RecentCounter = function () {
    this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
        this.q.shift();
    }
    return this.q.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 测试用例
let test = console.time('执行用时');
console.log();
console.timeEnd('执行用时');
