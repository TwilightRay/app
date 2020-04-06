const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {

// if (req.url === '/'){
//   fs.readFile(path.join(__dirname, '../site', 'index.html'), (err, data) => {
//     if (err) {
//       throw err
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     })
//     res.end(data)
//   })
// } else if (req.url === '/contact'){
//   fs.readFile(path.join(__dirname, '../site', 'contact.html'), (err, data) => {
//     if (err) {
//       throw err
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     })
//     res.end(data)
//   })
// }
//

let filePath = path.join(__dirname, '../site', req.url === '/' ? 'index.html' : req.url)
const ext = path.extname(filePath)
let contentType = 'text/html'

switch (ext) {
  case '.css':
    contentType = 'text/css'
    break
  case '.js':
    contentType = 'text/javascript'
    break
  default:
  contentType = 'text/html'
}

if (!ext){
  filePath += '.html'
}
fs.readFile(filePath, (err, content) => {
  if (err) {
    fs.readFile(path.join(__dirname, '../site', 'error.html'), (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200,{
          'Content-Type': contentType
        })
        res.end(data)
      }
    })
  } else {
    res.writeHead(200,{
      'Content-Type': contentType
    })
    res.end(content)
  }
})
})
const PORT = process.env.Port || 3000
server.listen( PORT, function () {
  console.log('server has been started on ${PORT}...');
});
