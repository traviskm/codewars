/*
  https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript
  Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  Examples
  "()"              =>  true
  ")(()))"          =>  false
  "("               =>  false
  "(())((()())())"  =>  true
*/

let validParentheses = input => {
  input = input.split("");
  let count = 0;

  for (i = 0; i < input.length; i++) {
    input[i] === '(' ? ++count : input[i] === ')' ? --count : null;
    if (count < 0) {
      return false;
    }
  }
  return count === 0 ? true : false;
}
