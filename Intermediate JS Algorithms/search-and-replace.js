//function that searches through string 'str' for 'before' word and replaces with the 'after' word

function myReplace(str, before, after) {
  //Split string into array of strings separated by space
  var strArr = str.split(" ");
  //Find the index of the before string
  var idxReplace = strArr.indexOf(before);
  var firstBeforeChar = before[0];

  //checks if the first before char is uppercase
  // alter after case if true
  if (firstBeforeChar == firstBeforeChar.toUpperCase()) {
    var afterArr = after.split("");
    afterArr[0] = afterArr[0].toUpperCase();
    after = afterArr.join("");
  }
  
  //splice the str
  strArr.splice(idxReplace, 1, after);
  //Join the array as the returned string value
  var returnStr = strArr.join(" ");
  
  return returnStr;
}