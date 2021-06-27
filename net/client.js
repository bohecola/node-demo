var net = require('net');

var socket = net.connect(12306, '127.0.0.1');

socket.setTimeout(2000);

socket.on('connect', () => {
  console.log('已经连接到服务器');
  // console.log(socket.remoteAddress);
  // console.log(socket.remotePort);
  // console.log(socket.localAddress);
  // console.log(socket.localPort);
})

// socket.write('hello server');

// socket.on('data', data => {
//   console.log(data.toString());
//   socket.end();
// })

// socket.on('close', () => {
//   console.log('连接已关闭');
// })

// socket.on('timeout', () => {
//   console.log('超时2000ms了');
// })