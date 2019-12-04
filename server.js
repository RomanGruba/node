const http = require("http");
const port = 3000;
const qs = require("querystring");
const url = require("url");

const server = http.createServer(function(req, res) {
  if (req.url === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  }

  if (req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<form method="GET"><input type="text" name="name"><input type="text" name="dog"><button type="submit">Send</button></form>'
    );
    res.end();
  }
  if (req.method === "POST") {
    const myURL = url.parse(req.url);
    const query = qs.parse(myURL.query);
    console.log(query);

    res.write(`Dog name - ${query.name}`);
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
