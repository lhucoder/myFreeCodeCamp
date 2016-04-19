//function that returns an array of unique values between two or more arrays

function unite(arr1, arr2, arr3) {
  var answerArr = [];
  var flatArg = new Array(0);

  for(var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      
      flatArg.concat(arguments[i][j]);
    }
  }
   
  var uniqueArray = flatArg.filter(function(item, pos) {
    return flatArg.indexOf(item) == pos;
  });
  
  return uniqueArray;
}
