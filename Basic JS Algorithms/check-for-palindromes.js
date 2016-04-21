//a function that will check if the string input is a palindrome

function palindrome(str) {
  //format str to lowercase and replace non-alphanumeric
  // characters using .replace()
  var tempStr = str.toLowerCase().replace(/[^A-Za-z0-9]/gi, '');
  
  //split string into an array
  var strArr = tempStr.split('');
  
  //check letters if strArr[i] == strArr[strArr.length - 1 - i]
  //the value in question against it's palindromic counterpart
  // until strArr.length / 2
  // anytime char doesn't match return false
  for (var i = 0; i <= strArr.length / 2; i++) {
    if (strArr[i] != strArr[strArr.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}