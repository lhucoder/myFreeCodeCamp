//function that will take an array of numbers and find the sorted position num belongs to

function where(arr, num) {
  // Find my place in this sorted array.
  
  // first sort the arr in numeric order
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  
  //check where num should be in sortedArr
  for (var i = 0; i < sortedArr.length; i++) {
    if (num - sortedArr[i] <= 0) {
      return i;
    } else if (num > sortedArr[sortedArr.length - 1]) { //check the final sorted value against num
      return sortedArr.length; //return end position if it's greater
    } 
  }

}