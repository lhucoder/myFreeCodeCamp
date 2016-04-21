//function that will split an array into groups of length size
// returns a 2D array

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  
  // loop: slice arr to size, then push to newArr
  for (var i = size; i <= arr.length + size; i += size) {
    var tempSlice = arr.slice(i - size, i);
    // check if tempSlice is empty
    // only push if it's not empty
    if (tempSlice.length > 0) {
      newArr.push(tempSlice);
    }
  }
  return newArr;
}