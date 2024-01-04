const http = require("http");

const server = http.createServer((req, res) => {
  // process.exit();  // to exit the event loop (or deregister the register event function)

  const url = req.url;
  const method = req.method;
});

server.listen(8080);
