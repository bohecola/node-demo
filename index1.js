console.log('this is a test');

const a = 100;
function test() {
  console.log(a);
}

module.exports.test = test;
module.exports.a = a;