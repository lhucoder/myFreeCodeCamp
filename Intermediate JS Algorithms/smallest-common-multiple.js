//function that finds the smallest common multiples between the 2 numbers in an array

function smallestCommons(arr) {
  //set useful variables

  var firstArg = arr[0];
  var secArg = arr[1];
  var largerArg;
  var smallArg;
  var comMulti = 1;
  var comMultFound = false;
  var numOfCommons = 0;
  
  //first check which one in array is larger
  if (firstArg > secArg) {
    largerArg = firstArg;
    smallArg = secArg;
  } else {
    largerArg = secArg;
    smallArg = firstArg;
  }
  
  //continue to search until common multiple is found
  // loop through all numbers in range between argument array
  while(!comMultFound) {
    for(var num = largerArg - 1; num >= smallArg; num--) {
      //if num is a common multiple
      if(largerArg * comMulti % num === 0) {
        numOfCommons++;
      //otherwise break out of for loop try next multiplier
      } else {
        break;
      }
    }
    //if all nums contain the common multiple break out of while loop
    if (numOfCommons == largerArg - smallArg) {
      comMultFound = true;
    } else {
      //otherwise reset numOfCommons and increase multiplier
      numOfCommons = 0;
      comMulti++;     
    }  
  }
  
  return largerArg * comMulti;
}