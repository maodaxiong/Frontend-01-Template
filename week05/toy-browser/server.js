<!--
 * @Descripttion: server
 * @version:
 * @Author: Brian
 * @Date: 2020年5月13日21:10:42
 * @LastEditors: Brian
 * @LastEditTime: 2020年5月13日21:40:42
 -->
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('request received')
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('ok')
})

server.listen(8088)
