let http = require('http');

const server = http.createServer((req, res)=>{
    res.end('server started');

})

server.listen(8002);