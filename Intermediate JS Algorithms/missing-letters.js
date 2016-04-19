//function that check if string of alphabetical order of letters are missing a letter
// return is missing letter or undefined if it's not missing

function fearNotLetter(str) {
  var strArr = str.split("");
  
  //check if str.charCodeAt(i) == str.charCodeAt(i + 1) - 1
  // if it isn't return String.fromCharCode(strArr[i].charCodeAt() + 1)
  for (var i = 0; i < str.length - 1; i++) {    
    var curCharCode = str.charCodeAt(i);
    var nextCharCode = str.charCodeAt(i + 1);
    if (curCharCode != nextCharCode - 1) {
      return String.fromCharCode(nextCharCode - 1); //return the missing string char
    }
  }

}