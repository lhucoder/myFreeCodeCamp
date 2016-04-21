//function that remove all elements from first array argument with values contained
// in the second set of arguments

function destroyer(arr) {
  //Initiate argument variable
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  
  //Function to check if it is the argument
  function isDestroy(value) {
    //loop through args
    //return false if value is same as a arg value
    for (var i = 0; i < args.length; i++) {
      if (value == args[i]) {
        return false;
      }
    }
    return true;
  }
  
  return arr.filter(isDestroy);
}

//sample function call, removes all 2's, 3's
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);