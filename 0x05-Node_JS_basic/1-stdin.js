#!/usr/bin/env node

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainLoop() {
  readline.question(
    "Welcome to Holberton school, what is your name?\n",
    (user) => {
      console.log(`Your name is: ${user}`);
      console.log("This important software is now closing");
      readline.close();
      process.exit(0);
    },
  );
}

mainLoop();
