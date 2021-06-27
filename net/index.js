// net 模块
// 5层网络协议
// 5. 应用层 http(80) FTP(21) SMTP(邮件发送, 25) POP3(110), DNS
// 4. 传输层: TCP, UDP
// 3. 网络层: IP, ICMP
// 2. 数据链路层: PPP, SLIP
// 1. 物理层: ISO2110(规范)

// TCP/IP

// GET/test ? param = 吃了吗？ HTTP/1.1 (http协议定义的，报文格式)
var net = require('net');

var server = net.createServer();
server.listen(12306, '127.0.0.1');

server.on('listening', () => {
  console.log('服务已经启动了');
})

server.on('connection', socket => {
  console.log('有新的连接');

  socket.on('data', data => {
    // console.log(data.toString());
    socket.write('HTTP 200OK\r\nConentType: text/html\r\n\r\n<html><body>hello Browser</body></html');
    socket.end();
  })
  
})
