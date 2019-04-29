

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
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
  let result = 0;
  const { length } = ar;

  for (let index = 0; index < length; index++) {
    result += ar[index];
  }
  // console.log(result);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(`${result}\n`);

  ws.end();
}
