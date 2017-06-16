var http = require('http');

http.createServer(function(require, response){

  // http 请求头
  // 200 标识成功请求
  response.writeHead(403, {'Content-Type': 'text/plain'})

  // 响应数据
  response.end('Hello World!')


}).listen(8888)

// serser start
console.log('Server running at http://127.0.0.1:8888/');
