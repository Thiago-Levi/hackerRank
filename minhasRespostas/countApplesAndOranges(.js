function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let countApplesInSamsHouse = 0;
  let countOrangesInSamsHouse = 0;

  apples.forEach((apple) => {
    if (apple + a >= s && apple + a <= t) {
      countApplesInSamsHouse++;
    }
  });

  oranges.forEach((orange) => {
    if (orange + b >= s && orange + b <= t) {
      countOrangesInSamsHouse++;
    }
  });
  console.log(countApplesInSamsHouse);
  console.log(countOrangesInSamsHouse);
}

const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];

countApplesAndOranges(s, t, a, b, apples, oranges);
