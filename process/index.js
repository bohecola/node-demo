// console.log(process === global.process);
// console.log(process.argv);

// console.log(process.execArgv);

// console.log(process.execPath);

// console.log(process.env);

// console.log(process.cwd());

// 宏任务: 主线程中按序执行 task->task; 回调函数、XHR回调
// setTimeout, setInterval, U/I rending I/O, setImmidate(node中独有)
// 微任务: task 完成之后，插入进来的任务; promise
// process.nextTick()

// new Promise((resolve, reject) => {
//   console.log(1);

// }).then((data) => {
//   console.log()
// }).catch(() => {

// })

// Promise.resolve().then()

// node 事件循环; libuv;

// setTimeout(() => console.log(1));
// setImmediate(() => console.log(2));

// process.nextTick(() => console.log(3)); // 由于历史原因，名字取错。nextTick实则插入到当前的Tick当中(接着同步任务后面)
// Promise.resolve().then(() => console.log(4));
// (() => console.log(5))(); // 本轮的同步tick

// process.nextTick(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// process.nextTick(() => console.log(3))
// Promise.resolve().then(() => console.log(4));
// (() => console.log(5))();

// setTimeout(() => console.log(1));
// setImmediate(() => console.log(2));
// 1, 2 或这 2, 1

// setTimeout(() => {
//   console.log(1)
// }, 10) // 浏览器时间间隔10ms, node 1-

// const fs = requrie('fs');
// fs.readFile('index.js', () => {
//   setTimeout(() => console.log(1));   // timer第二轮, 第一轮没有timer,只有readFile
//   setImmediate(() => console.log(2)); // 第一轮，插入本轮check当中
// })

// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('promise1');
//   })
// })

// setTimeout(() => {
//   console.log('timer2');
//   Promise.resolve().then(() => {
//     console.log('promise2');
//   })
// })

setImmediate(() => {
  setImmediate(() => {
    while(1) {
      console.log(10);
    }
  })
})

Promise.resolve().then(() => {
  console.log('promise2')
})