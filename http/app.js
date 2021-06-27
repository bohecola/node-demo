const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;


  if(url === '/') {
    res.setHeader('ContentType', 'text/html');
    res.write('<html>');
    res.write('<head><title>请输入你的内容呢</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">发送</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('msg.txt', message);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('ContentType', 'text/html');
  res.write('<html>');
  res.write('<head><title>我的页面</title></head>');
  res.write('<body><h1>你好，NodeJS</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000)
