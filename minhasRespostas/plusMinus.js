function plusMinus(arr) {
  const divisor = arr.length;

  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let numberOfZeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numberOfZeros++;
    } else if (arr[i] > 0) {
      positiveNumbers++;
    } else {
      negativeNumbers++;
    }
  }

  const proportionOfPositiveNumbers = positiveNumbers / divisor;
  const proportionOfNegativeNumbers = negativeNumbers / divisor;
  const proportionOfNumberOfZeros = numberOfZeros / divisor;

  console.log(proportionOfPositiveNumbers.toFixed(6));
  console.log(proportionOfNegativeNumbers.toFixed(6));
  console.log(proportionOfNumberOfZeros.toFixed(6));
}
const arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));
.
