const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greet</title></head>");
    res.write(`<body><h1>Hello Hardik</h1><form method='POST' action='/createuser'>

    <input type='text' placeholder='Username' name='name'/> <button type='submit'>Submit</button>
    </form> </body>`);
    res.write("</html>");

    return res.end();
  }

  console.log(url);
  console.log(method);

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
        res.end();
      }
    });
  }

  if (url === "/createuser" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split("=")[1];

      return fs.readFile("users.json", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const parsedData = JSON.parse(data);
          const user = newUser.split("+").join(" ");
          parsedData.push(user);

          console.log(user);
          console.log(parsedData);

          fs.writeFile("users.json", parsedData, (err) => {
            if (err) {
              console.log(err);
            }

            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
          });
        }
      });
    });
  }
};

module.exports = requestHandler;
