//function that takes a string and target argument, checks if the string ends
// with target.  str = Name, target = me should return true

function confirmEnding(str, target) {
  //check if str.substr(str.length - target.length, str.length)
  // is the same as target 
  return str.substr(str.length - target.length, str.length) == target;
}
