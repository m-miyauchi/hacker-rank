

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  const { length } = a;
  const result = [0, 0];

  for (let index = 0; index < length; index++) {
    if (a[index] > b[index]) {
      result[0]++;
    } else if (a[index] < b[index]) {
      result[1]++;
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(`${result.join(' ')}\n`);

  ws.end();
}
