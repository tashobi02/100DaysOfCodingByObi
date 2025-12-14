const http = require("node:http"); // create server
const fs = require("node:fs"); // read HTML files
const path = require("node:path"); // safe file paths

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  // server creation
  let filePath;

  if (req.url === "/" || req.url === "/index.html") {
    // establishing routing logic
    filePath = "index.html";
  } else if (req.url === "/about") {
    filePath = "about.html";
  } else if (req.url === "/contact-me") {
    filePath = "contact-me.html";
  } else {
    filePath = "404.html";
    res.statusCode = 404;
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, "utf8", (err, data) => {
    // reads html file from disk
    if (err) {
      res.statusCode = 500;
      res.end("Server Error");
      return;
    }

    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
