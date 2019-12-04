const http = require("http");
const port = 3000;

const server = http.createServer(function(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<form action="#"><input type="text"><button type="submit">Send</button></form>'
    );
    res.end();
  }
  if (req.url === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("err :", err);
  }
  console.log(`Server is listening on port ${port}`);
  // process.exit(1);
});
