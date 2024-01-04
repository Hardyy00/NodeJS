const http = require("http");

const server = http.createServer((req, res) => {
  // process.exit();  // to exit the event loop (or deregister the register event function)

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body></body>");
  res.write("</html>");
});

server.listen(8080);
