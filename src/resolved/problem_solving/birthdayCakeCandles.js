

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
  let maxNum = 0;
  let counter = 0;

  const { length } = arr;
  for (let index = 0; index < length; index++) {
    if (arr[index] > maxNum) {
      maxNum = arr[index];
      counter = 1;
    } else if (arr[index] === maxNum) {
      counter++;
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  const result = birthdayCakeCandles(ar);

  ws.write(`${result}\n`);

  ws.end();
}
