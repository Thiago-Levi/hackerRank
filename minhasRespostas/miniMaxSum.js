function miniMaxSum(arr) {
  let minNumber = arr[0];
  let maxNumber = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
    if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }

  console.log(`${sum - maxNumber} ${sum - minNumber}`);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
