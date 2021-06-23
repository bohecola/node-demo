// CPU 密集：压缩、解压， 加密、解密（图形计算）
// I/O 密集：文件操作、http网络操作、数据库操作

// 1.web层(controller)：（权限校验，封装，用户提示）
// 2.业务逻辑层（server层，LoginService）
// 3.DAO (data access object) 数据库操作；
// 4.持久层; 数据库：(mySQL, Oracle, DB2)
// (MongoDB, redis, HBase)

// 1. LoginServer  1.web层 LoginController
//                 2. LoginSerevice
//                 3. DAO

// CommosJS: 1. 一个文件是一个模块，拥有单独的作用域 NPM(kiss原则 keep it simple stupid)
//           2. 普通方式定义的变量，函数，对象，都属于模块内部
//           3. require();
//           4. exports, module.exports

// var a = 100;
// console.log(global.a);

// console.log(arguments);

// function test () {
//   var a = 100;
// }
// console.log(a);

// require();

// console.log(__filename);
// console.log(__dirname);
// (function (xxx, require, modulem, __filename, __dirname) {
//   var a = 100;
//   console.log(global.a);
// })

// REPL (read Eval Print Loop) 交互式解释器

// 核心模块，文件模块;
// require('fs')
let { test } = require('./index1.js'); // 缓存
let { a } = require('./index1.js');
// require('./index1.js');
// js, json, node 文件执行以三种方式进行尝试

console.log(arguments);
console.log(test, a);

const { readFile } = require('fs');

readFile('./main.js', 'utf-8', (err, data) => {
  console.log(data);
})