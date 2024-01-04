const http = require("http");
const 

const server = http.createServer((req, res) => {
  // process.exit();  // to exit the event loop (or deregister the register event function)
});

server.listen(8080);
