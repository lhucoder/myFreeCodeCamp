//function that decodes Caesar's Cipher

function rot13(str) { // LBH QVQ VG!
  
  var decodedStr = "";
  //convert str to unicode array
  var unicodeArr = [];
  for (var i = 0; i < str.length; i++) {
    unicodeArr.push(str.charCodeAt(i));
  }
  
  //manipulate the unicode array to caesars' cipher
  // if the number is between unicode 'A' and 'Z' only
  for (var k = 0; k < unicodeArr.length; k++) {
    //unicode value between M and Z should subtract 13
    if (unicodeArr[k] > 'M'.charCodeAt() && unicodeArr[k] <= 'Z'.charCodeAt()) {
      unicodeArr[k] -= 13;
    //otherwise after A add 13
    } else if (unicodeArr[k] >= 'A'.charCodeAt()) {
      unicodeArr[k] += 13;
    }
  }
  
  //create string from unicode array
  for (var j = 0; j < unicodeArr.length; j++) {
    var tempStr = String.fromCharCode(unicodeArr[j]);
    decodedStr += tempStr;
  }
    
  return decodedStr;
}