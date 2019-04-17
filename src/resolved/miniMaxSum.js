

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const { length } = arr;
  let min = Infinity;
  let max = 0;
  let sum = 0;
  const result = [0, 0];

  for (let index = 0; index < length; index++) {
    sum += arr[index];

    if (arr[index] < min) min = arr[index];
    if (arr[index] > max) max = arr[index];
  }
  result[0] = sum - max;
  result[1] = sum - min;
  console.log(`${result[0]} ${result[1]}`);
}

function main() {
  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
