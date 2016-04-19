//function that will repeat the str, num times as return

function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num > 0) {
    // for loop that appends the string num times
    for (var i = 0; i < num; i++) {
      newStr = newStr.concat(str);
      console.log(newStr);
    }
    return newStr;
  } else {
    return ""; // return empty string for negative numbers
  }
}