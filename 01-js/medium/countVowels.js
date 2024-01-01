/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let cnt = 0;
    // Your code here
    str.forEach((element,index) => {
      if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u' || element == 'A' || element == 'E' || element == 'I' || element == 'O' || element == 'U'){
        cnt++;
      }
    });

    return cnt;
}

module.exports = countVowels;