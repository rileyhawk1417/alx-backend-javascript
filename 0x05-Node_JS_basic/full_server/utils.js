const fs = require("fs");

function locFinder(data) {
  const match = data.substring(data.lastIndexOf(",") + 1, data.length);
  return match;
}

function readDatabase(path) {
  return new Promise(async (resolve, reject) => {
    let locArray = [];
    let studentArrayCS = [];
    let studentArraySWE = [];
    fs.readFile(path, "utf8", (err, fd) => {
      if (err) {
        reject(Error("Cannot load the database"));
      }
      if (fd) {
        let lines = fd.split("\n");
        let modifiedArray = lines.slice(1, lines.length);
        modifiedArray.pop();

        for (var idx of modifiedArray) {
          if (idx.lastIndexOf(",")) {
            if (!locArray.includes(locFinder(idx))) {
              locArray.push(locFinder(idx));
            }
          }

          if (idx.includes(locArray[0])) {
            studentArrayCS.push(idx.substring(0, idx.indexOf(",")));
          }

          if (idx.includes(locArray[1])) {
            studentArraySWE.push(idx.substring(0, idx.indexOf(",")));
          }
        }
        let data = [studentArraySWE, studentArrayCS];
        resolve(data);
      }
    });
  });
}

module.exports = readDatabase;
