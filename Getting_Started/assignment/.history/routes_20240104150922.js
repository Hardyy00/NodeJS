const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greet</title></head>");
    res.write("<body><h1>Hello Hardik</h1></body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/users") {
    let usr = "";

    fs.readFile("users.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const body = JSON.parse(data);
      }
    });
  }
};

module.exports = requestHandler;
