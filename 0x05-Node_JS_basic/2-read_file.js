const fs = require('fs');

function locFinder(data) {
  const match = data.substring(data.lastIndexOf(',') + 1, data.length);
  return match;
}

function countStudents(arg) {
  const locArray = [];
  const studentArrayCS = [];
  const studentArraySWE = [];
  try {
    const fd = fs.readFileSync(arg, 'utf8');

    const lines = fd.split('\n');
    const modifiedArray = lines.slice(1, lines.length);
    modifiedArray.pop();

    for (const idx of modifiedArray) {
      if (idx.lastIndexOf(',')) {
        if (!locArray.includes(locFinder(idx))) {
          locArray.push(locFinder(idx));
        }
      }

      if (idx.includes(locArray[0])) {
        studentArrayCS.push(idx.substring(0, idx.indexOf(',')));
      }

      if (idx.includes(locArray[1])) {
        studentArraySWE.push(idx.substring(0, idx.indexOf(',')));
      }
    }
    console.log(`Number of students: ${modifiedArray.length}`);
    console.log(
      `Number of students in CS: ${
        studentArrayCS.length
      }. List: ${studentArrayCS.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${
        studentArraySWE.length
      }. List: ${studentArraySWE.join(', ')}`,
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
