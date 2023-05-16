function timeConversion(s) {
  let hour = Number(`${s[0]}${s[1]}`);
  let minutes = Number(`${s[3]}${s[4]}`);
  let seconds = Number(`${s[6]}${s[7]}`);
  const AmOrPm = `${s[8]}${s[9]}`;

  function format(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  if (AmOrPm === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  }
  if (AmOrPm === "PM") {
    if (hour === 12) {
      hour = 12;
    } else {
      hour += 12;
    }
  }

  return `${format(hour)}:${format(minutes)}:${format(seconds)}`;
}

//s = "07:05:45PM";
s = "07:05:45PM";
console.log(timeConversion(s));
