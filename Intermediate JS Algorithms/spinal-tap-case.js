//function that converts string-into-spinal-case

function spinalCase(str) {

  var strArr = str.split("");
  
  var reAlphaNum = /[A-Za-z]/;
  var reCaps = /[A-Z]/;
  var addDashAfter = [];
  
  for (var i = strArr.length; i > 0; i--) {
    if (reCaps.test(strArr[i]) && reAlphaNum.test(strArr[i - 1])) { //condition for upcase letter without space
      addDashAfter.push(i - 1); //store index where dashes are needed beyond the loop
    }
    
    if (strArr[i] == " " || strArr[i] == "_") {
      strArr[i] = "-";
    }
  }
  
  for (var j = 0; j < addDashAfter.length; j++) {
    strArr.splice(addDashAfter[j] + 1, 0, "-");
  }
  
  var ansStr = strArr.join("").toLowerCase();
  
  return ansStr;
}