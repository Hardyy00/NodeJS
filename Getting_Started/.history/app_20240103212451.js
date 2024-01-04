const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  // console.log(res);
  // process.exit();  // to exit the event loop (or deregister the register event function)
});

server.listen(8080);
