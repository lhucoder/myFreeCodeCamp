//function that converts special char {&, <, >, ", '} into HTML entities

function convertHTML(str) {
  // &colon;&rpar;
  var strArr = str.split("");
  
  //loop through strArr and find special chars
  // replace with html entities
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] == "&") {
      strArr[i] = "&amp;";
    } else if (strArr[i] == "<") {
      strArr[i] = "&lt;";
    } else if (strArr[i] == ">") {
      strArr[i] = "&gt;";
    } else if (strArr[i] == "\"") {
      strArr[i] = "&quot;";
    } else if (strArr[i] == "'") {
      strArr[i] = "&apos;";
    }
  }
  
  var ansStr = strArr.join("");
  
  return ansStr;
}