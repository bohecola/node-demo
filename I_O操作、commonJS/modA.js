// module.exports.test = 'a';

// const modB = require('./modB.js');

// console.log('modA: ' + modB.test);

// module.exports.test = 'aa';

// var a = 100;
// module.exports.a = 1;
// exports.a = 100;
// exports = { // 覆盖了 module.exports
//   'a': 100
// }
module.exports = {
  'a': 1
}
// global.a = 200;


console.log(module.exports === exports);
// (function(exports, require, module, __filename, __dirname) {
//   exports = module.exports;
// })