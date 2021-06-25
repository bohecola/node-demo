const modA = require('./modA.js');

// const modB = require('./modB.js');

// const chalk = require('chalk');

// console.log(chalk.red('hello world'));

// 1. node_modules -> chalk -> package.json ->
// main: "xxxx" 若没有找 -> (index.js, index,json, index.node) -> 若没有，依次往上找 node_module -> 没有就报错

// console.log(a);
console.log(modA);
// console.log(module);
// xxx.node (dlopen()) xxx.json xxx.js
// Module._cache();