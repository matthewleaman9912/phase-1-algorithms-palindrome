function isPalindrome(word) {
  let pali1 = [];
  let pali2 = [];
  let end1 = "";
  let end2 = "";

  for (let i = 0; i < word.length; i++) {
    pali1[i] = word[i];
  }
  for (let j = word.length - 1; j > -1; j--) {
    pali2[(-j) + word.length - 1] = word[j]
    
  }
  for (let k = 0; k < pali1.length; k++) {
    end1 = end1 + pali1[k];
  }
  for (let l = 0; l < pali2.length; l++) {
    end2 = end2 + pali2[l];
  }

  if (end1 === end2) {
    return true;
  }
  else {
    return false;
  }
}

/* 
  take in word to test if palindrome 
    set var for word to be saved in array normally
    set var for word to be saved in array backwards
    set var to combine parts of normal array into string
    set var to combine parts of backwards array into string

    iterate through input word and save to array variable
    iterate through input word and save backwards array variable
    iterate through normal array and turn into string
    iterate through backwards array and turn into string

    if the normal string variable is equal to backwards string
      return true
    else
      return false
*/

/*
  This function takes in a word and stores each letter into an array forwards and each letter into a seperate array backwards. Then using those arrays, this function combines each letter into two separate strings, one forward and one backwards. Then the two strings are compared, if they are the same, then the function returns a value of true, meaning a palindrome was inputted, if not then it will return false, meaning the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
