const fs = require('fs');

// 错误优先原则 error first
// utf8 utf-8 {encoding: 'utf8'}
// 读取文件会看后缀名，写入不会
// fs.readFile('../buffer/index.js', 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })

// 异步不会阻塞线程， 同步会阻塞
// let res = fs.readFileSync('../buffer/index.js', 'utf8');
// console.log(res);

// const content = Buffer.from('//this is a test');
// 写入文件，没有则创建一个
// fs.writeFile('./test.js',
//   // '//this is a test',
//   // 'utf-8',
//   content,
//   err => err ? console.log(err) : console.log('done')
// )

// fs.stat('./test.js', (err, data) => {
//   if(err) {
//     console.log('文件不存在');
//     return;
//   };
//   console.log(data.atime);
//   console.log(data.isDirectory())
//   console.log(data.isFile());
// })

// fs.rename('./index.html', 'test.html', err => {
//   if(err) throw err;
//   console.log('done');
// })

// fs.unlink('./test.html', err => {
//   if(err) throw err;
//   console.log('done');
// })


// 文件夹相关操作
// fs.readdir('./', (err, files) => {
//   if(err) throw err;
//   console.log(files)
// })

// console.log(__dirname);
// console.log(__filename);

// fs.mkdir('./testDir', err => {
//   if(err) throw err;
//   console.log('done');
// })

// fs.rmdir('./testDir', err => {
//   if(err) throw err;
//   console.log('done');
// })

fs.watch('./', {
  recursive: true
}, (eventType, fileName) => {
  console.log(eventType, fileName);
})