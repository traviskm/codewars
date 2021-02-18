/*
  https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
*/

let parse = (x) => {
  return parseInt(eval(x));
}

let zero = (x = 0) => {
  return x !== 0 ? parse("0" + x) : "0";
}

let one = (x = 0) => {
  return x !== 0 ? parse("1" + x) : "1";
}

let two = (x = 0) => {
  return x !== 0 ? parse("2" + x) : "2";
}

let three = (x = 0) => {
  return x !== 0 ? parse("3" + x) : "3";
}

let four = (x = 0) => {
  return x !== 0 ? parse("4" + x) : "4";
}

let five = (x = 0) => {
  return x !== 0 ? parse("5" + x) : "5";
}

let six = (x = 0) => {
  return x !== 0 ? parse("6" + x) : "6";
}

let seven = (x = 0) => {
  return x !== 0 ? parse("7" + x) : "7";
}

let eight = (x = 0) => {
  return x !== 0 ? parse("8" + x) : "8";
}

let nine = (x = 0) => {
  return x !== 0 ? parse("9" + x) : "9";
}

let plus = (x) => {
  return "+" + x;
}

let minus = (x) => {
  return "-" + x;
}

let dividedBy = (x) => {
  return "/" + x;
}

let times = (x) => {
  return "*" + x;
}
