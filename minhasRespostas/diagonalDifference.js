const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let j = arr.length - 1;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][j--];
  }

  const absoluteDifference = Math.abs(primaryDiagonal - secondaryDiagonal);

  return absoluteDifference;
}

console.log(diagonalDifference(arr));
