const EventEmitter = require('events');

class CustomEvent extends EventEmitter {};

var ce = new CustomEvent();

ce.on('test', () => {
  console.log(1);
})


setInterval(() => {
  ce.emit('test');
}, 1000)
ce.emit('test');
// 1. 后端继承自 EventEmitter 的实例、前端dom元素
// 2. 前端click, mouseMove（协议）
// 3. 前端通过UI操作触发
// 后端通过 emit('name')触发
