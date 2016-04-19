//function that drops elements until the func predicate returns true

function drop(arr, func) {
  // Drop them elements.
  
  for(var i = 0; i < arr.length; i++) {
    //if function's return is true break out of for loop
    if(func(arr[i])) {
      break;
    }
  }
  
  //slice where i was found true
  return arr.slice(i, arr.length);
}

drop([1, 2, 3], function(n) {return n <= 3; });