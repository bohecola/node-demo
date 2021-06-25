// Buffer.compare(buf1, buf2)#
// buf1 <Buffer> | <Uint8Array>
// buf2 <Buffer> | <Uint8Array>
// 返回: <integer> -1、0 或 1，取决于比较的结果。 详见 buf.compare()。
// 比较 buf1 和 buf2，通常用于对 Buffer 实例的数组进行排序。 这相当于调用 buf1.compare(buf2)。

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));
// 打印: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// （此结果相当于：[buf2, buf1]。）