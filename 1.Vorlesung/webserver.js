const http = require('http')
const hostname = 'localhost'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<!DOCTYPE html>'+
            '<html>'+
            '<head>'+
            '</head>'+
            '<body>'+
            '<h1>'+
            'Super das geht!'+
            '</h1>'+
            '<h2>'+
            'Zweite Ueberschrift!'+
            '</h2>'+
            '<p>'+
            'Das ist der erste Paragraph auf dieser Seite! Das kann ein kurzer, aber auch ein sehr langer Paragraph sein.'+
            '</p>' +
            '</body>'+
            '</html>')
})

server.listen(port, hostname, () => {
  console.log('Server laeuft unter http://' + hostname + ':' + port)
})
