const { createServer } = require("node:http"); // load built in HTTP module

const hostname = "127.0.0.1"; // local host - server will onl be accessible from this machine
// 127.0.0.1 is called the loopback address - the network packets loop back internally
const port = 3000; // -> door number to the server

const server = createServer((req, res) => {
  // creates am HTTP server
  // req -> request object, res -> response object
  res.statusCode = 200; // 200 means request successful, 404 means not found, 500 means server error
  res.setHeader("Content-Type", "text/plain"); //Sets HTTP response header, tells browser that sending plain text
  res.end("Hello World"); // Sends response body
});

server.listen(port, hostname, () => {
  // Server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});
