if (url === "/") {
  res.write("<html>");
  res.write("<head><title>Enter Message</title></head>");
  res.write(
    "<body><form action='/message' method='POST'><input type='text' name='message'/> <button type='submit'>Save</button></form></body>"
  );
  res.write("</html>");
  return res.end(); // to return from the function only
}

if (url === "/message" && method === "POST") {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1]; // parsedBody: message="message" (so we split to get the actual message)

    fs.writeFile("message.txt", message, () => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  });
}
res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title>My First Page</title></head>");
res.write("<body><h1>Hello My NodeJS</h1></body>");
res.write("</html>");

res.end();
