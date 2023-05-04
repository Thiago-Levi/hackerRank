// aVeryBigSum

const arrayOfIntegers = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];

function aVeryBigSum(arrayOfIntegers) {
  const sumResult = arrayOfIntegers.reduce(
    (acc, aInteger) => (acc += aInteger),
    0
  );
  return sumResult;
}

console.log(aVeryBigSum(arrayOfIntegers));
