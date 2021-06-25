// buf.toString([encoding[, start[, end]]])
const buf1 = Buffer.allocUnsafe(26);
for(let i = 0; i < 26; i++) {
  buf1[i] = i + 97;
}
console.log(buf1.toString('ascii', 0, 5));

const buf2 = Buffer.from('test');
console.log(buf2.toString('hex'));
console.log(buf2.toString('utf8', 0, 3));
console.log(buf2.toString(undefined, 0, 3));
// JS中 参数传的是undefined相当于没有传，只是起到一个占位的作用