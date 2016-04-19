//function that sums two arguments together or chains a function for another value

function addTogether() {
  var x = arguments[0];
  var y = arguments[1];

  //deal with 2 arguments
  if(arguments.length == 2 && typeof x == "number") {
    //if second arg isn't a number
    if(typeof y != "number") {
      return undefined;
    } else {
      return x + y;
    }
  //deal with only 1 argument  
  } else if(typeof x != "number") {
    return undefined;
  //use closure code to return another function for single argument
  // that is a valid number
  } else if(typeof x == "number") {
    return function(y) {
      //if second 1 argument passed is a number
      if(typeof y == "number") {
        return x + y;
      //otherwise return undefined for non-numbers
      } else {
        return undefined;
      }
    };
  //any other weird cases returns undefined
  } else {
    return undefined;
  }
  
}

addTogether(2)(3); //returns 5
addTogether(2, 3); //returns 5