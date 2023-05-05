arrAliceTriplet = [0, 0, 0];
arrayBobTriplet = [1, 2, 3];

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let index = 0; index < 3; index++) {
    if (a[index] > b[index]) {
      aliceScore++;
    }
    if (a[index] < b[index]) {
      bobScore++;
    }
  }

  const showResults = [aliceScore, bobScore];

  return showResults;
}
console.log(compareTriplets(arrAliceTriplet, arrayBobTriplet));
