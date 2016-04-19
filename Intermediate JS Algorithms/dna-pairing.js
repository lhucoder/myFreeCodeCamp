//function that pairs DNA strand with their matching base pair, return is a 2d array

function pair(str) {
  //convert str to an array
  var strArr = str.split("");
  //convert str into a 2d array
  var twoDArr = new Array(1);
  for (var i = 0; i < strArr.length; i++) {
    twoDArr[i] = new Array(strArr[i]); 
  }
 
  //Check if value in twoDArr[j] is A T C or G
  // push the corresponding base pair into the array
  for (var j = 0; j <twoDArr.length; j++) {
    if (twoDArr[j] == "A") {
      twoDArr[j].push("T");
    } else if (twoDArr[j] == "T") {
      twoDArr[j].push("A");
    } else if (twoDArr[j] == "C") {
      twoDArr[j].push("G");
    } else if (twoDArr[j] == "G") {
      twoDArr[j].push("C");
    }
  }
  
  return twoDArr;
}