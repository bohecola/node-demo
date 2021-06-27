const globalConf = require('./conf');
const net = require('net');
const fs = require('fs');

let server = net.createServer();
server.listen(globalConf.port, '127.0.0.1'); // mac下端口占用，使用 ps aux | grep 'node'查看进程，最后kill

server.on('listening', () => {
  console.log('server is running');
})

server.on('connection', socket => {
  socket.on('data', data => {
    let url = data.toString().split('\r\n')[0].split(' ')[1];

    try {
      let dataFile = fs.readFileSync(__dirname + globalConf.path + url);
      socket.write('HTTP 200OK\r\ncontentType: text/html\r\nServer: JSWS/1.1\r\n\r\n'); // 不写contentType 仅在chrome浏览器适用
      socket.write(dataFile);
    } catch (e) {
      socket.write('HTTP 404NotFound\r\n\r\n<html><body><h1>NOT FOUND</h1></body></html');
    }
    socket.end();
  })
})
