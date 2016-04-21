//function that translates binary into english

function binaryAgent(str) {
  var strArr = str.split(" ");
  var charCodeArr = [];
  var ansArr = [];
  
  //for each binary array object convert to unicode
  for(var i = 0; i < strArr.length; i++) {
    charCodeArr.push(parseInt(strArr[i], 2));
  }
  
  for(var j = 0; j < charCodeArr.length; j++) {
    ansArr.push(String.fromCharCode(charCodeArr[j]));
  }
  
  return ansArr.join("");
}