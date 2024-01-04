const http = require("http");

const server = http.createServer((req, res) => {
  console.log(res);
  process.exit();
});

server.listen(8080);
