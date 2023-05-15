function birthdayCakeCandles(candles) {
  // Write your code here
  let heightCandle = 0;
  let countHeightCandle = 0;

  for (let i = 0; i < candles.length; i++) {
    if (heightCandle <= candles[i]) {
      heightCandle = candles[i];
    }
    //countHeightCandle = 0;
    if (heightCandle == candles[i]) {
      countHeightCandle++;
    }
  }

  console.log(countHeightCandle);
}

const candles = [3, 2, 1, 3, 2, 3, 3, 2, 1, 1];
birthdayCakeCandles(candles);
