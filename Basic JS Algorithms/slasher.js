//function that returns the remaining elements of an array

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}