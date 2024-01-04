const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greet</title></head>");
    res.write(`<body><h1>Hello Hardik</h1><form method='POST' action='/createuser'>

    <input type='text' placeholder='Username' /> <button type='submit'>Submit</button>
    </form> </body>`);
    res.write("</html>");

    return res.end();
  }

  if (url === "/users") {
    return fs.readFile("users.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const users = JSON.parse(data);

        let body = "";

        for (const st of users) body += `<li>${st}</li>`;

        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Users</title></head>");
        res.write(`<body><ul>${body}</ul></body>`);
        res.write("</html>");
        return res.end();
      }
    });

    if (url === "/createuser" && method === "POST") {
      const body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      return req.on("end", () => {
        const parsedBody = Buffer.concat(body);
        const newUser = pare;
      });
    }
  }
};

module.exports = requestHandler;
