/*
  https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

  A pangram is a sentence that contains every single letter of the alphabet at
  least once. For example, the sentence "The quick brown fox jumps over the lazy
  dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

  Given a string, detect whether or not it is a pangram. Return True if it is,
  False if not. Ignore numbers and punctuation.
*/

let isPangram = string => {
  // First set the string to lowercase, then use regex to replace all of the non
  // alphabetical characters. Use a positive lookahead to remove all duplicate
  // characters and return the length of the string.
  let length = string.toLowerCase().replace(/[^a-z]/g, '').replace(/(.)(?=.*\1)/g, '').length;
  return length === 26 ? true : false;
}
