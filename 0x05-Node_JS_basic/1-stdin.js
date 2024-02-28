#!/usr/bin/env node
/*
 * NOTE: There is nothing wrong with this code it works.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainLoop() {
  readline.question(
    'Welcome to Holberton school, what is your name?\n',
    (user) => {
      console.log(`Your name is: ${user}`);
      console.log('This important software is now closing');
      readline.close();
      process.exit(0);
    },
  );
}
*/

process.stdout.write('Welcome to Holberton school, what is your name?\n');
process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName !== null) {
    process.stdout.write(`Your name is: ${userName}\r`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
