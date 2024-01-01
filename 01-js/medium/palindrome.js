/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.length-1;
  let i = 0;
  while(i<s){
    if(str[i] != str[s])
    return 0;
    i++;
    s--;
  }
  return true;
}

module.exports = isPalindrome;
