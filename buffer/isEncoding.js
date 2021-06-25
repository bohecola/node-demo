// Buffer.isEncoding(encoding)
// encoding <string> 要检查的字符编码名称。
// 返回: <boolean>
// 如果 encoding 是支持的字符编码的名称，则返回 true，否则返回 false。

console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('gbk'));