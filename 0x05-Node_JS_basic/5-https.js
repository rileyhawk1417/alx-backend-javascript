const http = require('http');

const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
});

app.on('request', async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      res.write('This is the list of our students\n');
      const data = await countStudents(process.argv[2]);
      res.statusCode = 200;
      res.end(`${data.join('\n')}`);
    } catch (err) {
      res.statusCode = 404;
      res.end(err.message);
    }
  }
});

app.listen(port);

module.exports = app;
