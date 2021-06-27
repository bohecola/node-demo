var net = require('net');
var server = net.createServer();

server.listen(12306, '127.0.0.1');

// server.on('listening', () => {
//   console.log('服务器已经启动');
//   console.log(server.address());
// })

// server.on('connection', socket => {
//   console.log('有新连接了');

//   socket.on('data', data => {
//     console.log(data.toString());
//   })

//   socket.write('hello client');

//   socket.on('close', () => {
//     console.log('客户端已经关闭');
//     server.close();
//   })
// })

// server.on('close', () => {
//   console.log('服务器已关闭');
// })