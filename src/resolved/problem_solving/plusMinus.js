

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  const { length } = arr;
  const counterObj = {
    positive: 0,
    negative: 0,
    zero: 0,
  };
  const resultArr = [];

  for (let index = 0; index < length; index++) {
    if (arr[index] > 0) {
      counterObj.positive++;
    } else if (arr[index] < 0) {
      counterObj.negative++;
    } else {
      counterObj.zero++;
    }
  }

  resultArr.push(counterObj.positive / length);
  resultArr.push(counterObj.negative / length);
  resultArr.push(counterObj.zero / length);

  console.log(resultArr[0]);
  console.log(resultArr[1]);
  console.log(resultArr[2]);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
