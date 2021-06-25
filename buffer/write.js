const buf = Buffer.alloc(5);
console.log(buf);

// buf.write(string[, offset[, length]][, encoding])
// 返回写入的字节数
const len = buf.write('test', 1, 3);

// buf.toString([encoding[, start[, end]]])
console.log(len, buf.toString('utf8', 0, len));
