const http = require("http");
const { hostname } = require("os");
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Holberton School!");
});

app.listen(port, () => {
  console.log(`Server running on http://${hostname()}:${port}/`);
});

module.exports = app;
