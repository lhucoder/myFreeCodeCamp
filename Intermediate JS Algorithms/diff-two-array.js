//function compares two arrays and returns values found unique

function diff(arr1, arr2) {
  var newArr = [];
  var sharedArr = [];

  function isValInArr2(value) {
    return value == arr2[i];
      }

  //for loop pass arr1 and arr2 compare each index
  // and filter out values that are the same into a new arr
  for (var i = 0; i < arr2.length; i++) {
    //only push to sharedArr if not empty
    var shareFiltered = arr1.filter(isValInArr2);
    if (shareFiltered.length > 0) {
      sharedArr.push(shareFiltered[0]); //remove array []
    }
  }
  
  //concat arr1 and arr2 into new arr and remove elements
  // by splice sharedArr compared index of concatArr
  var concatArr = arr1.concat(arr2);
  for (var j = concatArr.length; j >= 0 ; j--) { //go in reverse to not cause index shifts
    for (var k = 0; k < sharedArr.length; k++) {
      if (sharedArr[k] == concatArr[j]) {
        concatArr.splice(j, 1);
      }
    }
  }

  return concatArr;
}