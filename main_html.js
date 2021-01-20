const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('myWebPage.html').pipe(res)
})

server.listen(process.env.PORT || 80)
console.log('Server running at http://127.0.0.1:80/');
