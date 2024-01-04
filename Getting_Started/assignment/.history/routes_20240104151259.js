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
    return fs.readJson("users.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const users = JSON.parse(data);

        let body = "";

        for (const st of users) body += `<li>${st}</li>`;

        res.setHeaders("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Users</title></head>");
        res.write(`<body><ul>${body}</ul></body>`);
        res.write("</html>");
        return res.end();
      }
    });
  }
};

module.exports = requestHandler;
