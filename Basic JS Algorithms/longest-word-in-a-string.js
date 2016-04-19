//a function that will find the longest word from string argument

function findLongestWord(str) {
  //split str by space delimiter
  //compare str.split[i] length return longest
  var longestLength = 0;
  var strArr = str.split(" ");
  //loop through strArr
  for (var i = 1; i < strArr.length; i++) {
  	//compare individual words, set as longest if larger
    if (strArr[i].length > strArr[i - 1].length && longestLength < strArr[i].length) {
      longestLength = strArr[i].length;
    }
  }
  
  return longestLength;
}
