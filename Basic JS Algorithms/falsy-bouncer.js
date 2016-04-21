//function that removes falsy values such as {false, null, 0, "", undefined, NaN}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function isFalsy(value) {
    //first check if value is a number and not 0 or NaN
    if (typeof(value) === "number" && value !== 0 && !isNaN(value)) {
        return true;
      //check if value is a string and not an empty string
      } else if (typeof(value) === "string" && value !== "") {
        return true;
      } else {
        return false;
      }
  }
  
  var filtered = arr.filter(isFalsy);
  
  return filtered;
}