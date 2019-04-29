

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
  const { length } = grades;

  for (let index = 0; index < length; index++) {
    const multipleNum = Math.floor(grades[index] / 5);
    const nextMultiple = (multipleNum + 1) * 5;
    const gap = nextMultiple - grades[index];
    if ((grades[index] >= 38) && gap < 3) {
      grades[index] = nextMultiple;
    }
  }

  return grades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const grades = [];

  for (let gradesItr = 0; gradesItr < n; gradesItr++) {
    const gradesItem = parseInt(readLine(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(`${result.join('\n')}\n`);

  ws.end();
}
