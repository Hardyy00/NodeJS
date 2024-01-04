const http = require("http");

const server = http.createServer((req, res) => {
  // process.exit();  // to exit the event loop (or deregister the register event function)

  const url = req.url;

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello My NodeJS</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(8080);
