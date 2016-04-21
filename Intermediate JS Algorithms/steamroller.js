//function that flattens arrays

function steamroller(arr) {
  var newArr = [];
  
  //recursion into array of arrays and concat the content
  // push it if it isn't an array
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(steamroller(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);