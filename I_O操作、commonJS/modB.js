module.exports.test = 'b';

// 只输出已经加载的部分，还未执行的部分不会加载
const modA = require('./modA.js');

console.log('modB: ' + modA.test);

module.exports.test = 'bb';
