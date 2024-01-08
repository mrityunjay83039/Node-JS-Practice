let http = require("http");
let data = [{
  name: "mrityunjay",
  age: 27,
}]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type" , 'application/json')
    res.end(JSON.stringify(data))
});

server.listen(8002);
