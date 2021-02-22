/*
  https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
  In the solutions section I found a much better way to do this that I didn't know about,
  you can use .toString() with a numeric argument to convert a number to one of a different
  base. For example you can use 255.toString(16) to convert 255 to base 16 (hex).
*/

let rgb = (r, g, b) => {
  let colors = [r, g, b];
  let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let string = "";

  colors.forEach(color => {
    let modColor = color < 0 ? 0 : color > 255 ? 255 : color;
    let divided = parseInt(modColor) / 16
    let first = hex[Math.floor(divided)];
    let second = hex[(divided - Math.floor(divided)) * 16];
    string += first + second;
  });

  return string;
}
