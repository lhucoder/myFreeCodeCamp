//function that translate a string to pig latin

function translate(str) {
  //split str
  var strArr = str.split("");
  var consChar = "";
  var consCount = 0;
  
  //check if first char is a vowel
  if (isVowel(strArr[0])) {
    strArr.push("way");
    str = strArr.join("");
    return str;
  } else {
    //find the first vowel within the length when it doesn't start with a vowel
    for (var j = 0; j < strArr.length; j++) {    
      if(!isVowel(strArr[j])) {
        consChar += strArr[j]; //create a string of consonants
        consCount++;
      } else {
        break; //finding the first vowel breaks out of for loop
      }
    }
    
    //shift off consonants then add to end with "ay"
    while (consCount > 0) {
      strArr.shift();
      consCount--;
    }
    strArr.push(consChar + "ay");
    str = strArr.join("");
    return str;

  }

}

//method to check if character is a vowel
function isVowel(char) {
  var vowels = new Array("a", "e", "i", "o", "u");

  for (var i = 0; i < vowels.length; i++) {
    if (char == vowels[i]) {
      return true;
    }
  }
  
  return false;
}