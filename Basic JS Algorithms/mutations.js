//function that returns true if string in first element contains all letters in second element

function mutation(arr) {
  //normalize elements into lowercase
  var firstLC = arr[0].toLowerCase();
  var secondLC = arr[1].toLowerCase();
  
  //split secondLC into single char string and compare
  // each single char to firstLC with indexOf
  var secondArr = secondLC.split("");
  for (var i = 0; i < secondArr.length; i++) {
    if (firstLC.indexOf(secondArr[i]) == -1) {
      //first instance where char doesn't match a char 
      // in firstLC, false is returned
      return false;
    }
  }
  //if it passes through the for loop return true
  return true;
}