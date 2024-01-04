const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URl : ");
  console.log(req.url);

  console.log("Headers : ");
  console.log(req.headers);

  console.log("Method : ");
  console.log(req.method);
  // console.log(res);
  // process.exit();  // to exit the event loop (or deregister the register event function)
});

server.listen(8080);
