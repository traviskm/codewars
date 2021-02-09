/*
  https://www.codewars.com/kata/559590633066759614000063/javascript
*/

let minMax = array => {
  // Use spread notation to allow the min and max functions to be called
  return [Math.min(...array), Math.max(...array)];
}
