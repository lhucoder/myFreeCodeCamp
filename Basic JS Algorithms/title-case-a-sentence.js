//returns string with first char capitalized for each word, leaving the rest lower case

function titleCase(str) {
  //make str lowercase and split by space
  var strArr = str.toLowerCase().split(" ");
  
  //take index [i].charAt(0) toUpperCase
  // slice index 1 to strArr.length into new array
  for (var i = 0; i < strArr.length; i++) {
    var lengthOfWord = strArr[i].length;
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1, lengthOfWord);
  }
  
  //rejoin str with space as separator and return it
  var newStr = strArr.join(" ");
  
  return newStr;
}
