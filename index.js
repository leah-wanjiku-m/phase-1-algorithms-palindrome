function isPalindrome(word) {
  // Write your algorithm here
  return word ===word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  declare a function with parameter word 
  reverse the input
  if the reversed string===to the given input
  return true else return false not a palindrome
*/

/*
  Add written explanation of your solution here
  we declare a function
  which loops through the input  and returns true if its a palindrome
   meaning the requirements are met and false if they are not met.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
