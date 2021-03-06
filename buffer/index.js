// const buf = Buffer.from('test');

// console.log(buf);
// console.log(buf.length);

// UTF-8 (1或4) (最多4各字节表示一个字符)

// 0*******  1个字节的编码方式
// 110*****  10******  2个字节的编码方式
// 1110****  10******  10******  3个字节的编码方式
// 11110***  10******  10******  10******  4个字节的编码方式

// 1. buffer 操作二进制数据流
// 2. 实例类似于整数 (0-255 用16进制的方式)数组，大小是固定的
// 3. buffer node 代码不是在v8中申请的，是node中C++层面实现的
// node 的buffer 申请不是通过javascript来实现的，而是C++来实现的
// slab FreeBSD linux

// const buf1 = Buffer.alloc(10, 1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1, 2, 3]); 
// const buf5 = Buffer.alloc(5, 'a');
// <Buffer 61 61 61 61 61>

// console.log(buf1);
// console.log(buf3);
// console.log(buf4);
// console.log(Buffer.from('test').length);
// console.log(buf5);

// iconv    iconv-lite
var obj = {
  '3': 1,
  '4': 2,
  length: 5
}

// const str = 'http://nodejs.cn/';
// const buf = Buffer.allocUnsafe(str.length);

// for(let i = 0; i < str.length; i++) {
//   buf[i] = str.charCodeAt(i);
// }

// console.log(buf.toString('ascii'));

const buf = Buffer.from('http://nodejs.cn/');
var str = '';

for(let i = 0; i < buf.length; i++) {
  str += String.fromCodePoint(buf[i]);
}

console.log(str);