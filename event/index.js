const EventEmitter = require('events');

class CustomEvent extends EventEmitter {};

var ce = new CustomEvent();

// ce.on('test', (data, data1, data2) => {
//   console.log(data, data1, data2);
// })

// ce.on('error', (data) => {
// 	console.log(data);
// })

// ce.once('test', (data, time) => {
//  console.log(data, time)
// })

function fn1 () {
	console.log('fn1');
}

function fn2 () {
	console.log('fn2');
}

ce.on('test', fn1);
ce.on('test', fn2);

console.log(ce.setMaxListeners(20));
console.log(ce.getMaxListeners());
console.log(ce.listenerCount('test'));

setInterval(() => {
	ce.emit('test');
}, 500)

setInterval(() => {
	// ce.removeListener('test', fn2);
	// ce.off('test', fn1);
	// ce.off('test', fn2);
	ce.removeAllListeners('test');
}, 1500)

// 1. 后端继承自 EventEmitter 的实例、前端dom元素
// 2. 前端click, mouseMove（协议）
// 3. 前端通过UI操作触发
// 后端通过 emit('name')触发
