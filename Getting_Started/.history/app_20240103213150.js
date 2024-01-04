const http = require("http");

const server = http.createServer((req, res) => {
  // process.exit();  // to exit the event loop (or deregister the register event function)

  res.setHeader("Content-Type", "text/html");
  res.write("");
});

server.listen(8080);
