//function that takes in array with subarray list of numbers and return the largest values

function largestOfFour(arr) {
  var resultsArr = [];  
  var arrSize = arr.length;
  
  //iterate over two index and return largest number
  for (var i = 0; i < arrSize; i++) {
    var largestNum = 0;
    var arrSubSize = arr[i].length;
    
    for (var j = 1; j < arrSubSize; j++) {
      //compare each index j value store largest number
      var curNum = arr[i][j];
      var prevNum = arr[i][j - 1];
      if (curNum > prevNum && curNum > largestNum) {
        largestNum = curNum;
      } else if (prevNum > curNum && prevNum > largestNum) {
        largestNum = prevNum;
      } 
    }
    //push(largest number) into temp array
    resultsArr.push(largestNum);
  }
  
  return resultsArr;
}

//sample array arguments would return [5, 27, 39, 1001]
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
