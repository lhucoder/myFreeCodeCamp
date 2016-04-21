//function that will truncate a string str to a maximum length of num

function truncateString(str, num) { 
  // check if str.length is longer than num
  if (str.length > num && num > 3) {
    //remove 3 char to add ...
    return str.slice(0, num - 3).concat("...");
  } else if (str.length > num && num < 3) { //condition for short length strings
    return str.slice(0, num).concat("...");
  } else {
  return str;
  }
}