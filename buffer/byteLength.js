// Buffer.byteLength(string[, encoding])
// string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> | <SharedArrayBuffer> 用于计算长度的值。
// encoding <string> 如果 string 是字符串，则这就是它的编码。 默认值: 'utf8'。
// 返回: <integer> string 中包含的字节数。

let str = '你好'
let buf = Buffer.from(str);
console.log(str.length); // 字符串的长度 2
console.log(buf.length); // 字节的个数   6
console.log(Buffer.byteLength(buf, 'ucs2')); // 字节的个数 6
