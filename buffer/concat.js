// Buffer.concat(list[, totalLength])#

// list <Buffer[]> | <Uint8Array[]> 要连接的 Buffer 或 Uint8Array 实例的列表。
// totalLength <integer> 连接时 list 中 Buffer 实例的总长度。
// 返回: <Buffer>
// 返回新的 Buffer，它是将 list 中的所有 Buffer 实例连接在一起的结果。
// 如果列表没有条目，或者 totalLength 为 0，则返回新的零长度 Buffer。
// 如果未提供 totalLength，则从 list 中的 Buffer 实例通过相加其长度来计算。
// </Buffer>如果提供了 totalLength，则将其强制为无符号整数。 如果 list 中 Buffer 的组合长度超过 totalLength，则结果截断为 totalLength。

// 从三个 `Buffer` 实例的列表创建单个 `Buffer`。

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);
// 打印: 42

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(bufA);
// 打印: <Buffer 00 00 00 00 ...>
console.log(bufA.length);
// 打印: 42