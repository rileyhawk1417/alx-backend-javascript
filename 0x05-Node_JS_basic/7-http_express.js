const express = require('express');

const port = 1245;
const app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!').statusCode = 200;
});

app.get('/students', async (req, res) => {
  const intro = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${intro}${data.join('\n')}`).statusCode = 200;
  } catch (err) {
    res.send(`${intro}Cannot load the database`).statusCode = 500;
  }
});

app.listen(port);

module.exports = app;
