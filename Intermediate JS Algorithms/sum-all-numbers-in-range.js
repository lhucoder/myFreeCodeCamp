//function that sums all number between an array of two numbers range

function sumAll(arr) {
  
  //generate an array with integer increments
  // between the two arguments passed
  var incremArr = [];
  var diff = Math.max(arr[0], arr[1]) - Math.min(arr[0], arr[1]);
  for (var i = 0; i <= diff; i++) {
    incremArr.push(Math.min(arr[0], arr[1]) + i);
  }
  
  //reduce and sum up the incremental array
  // return total
  var total = incremArr.reduce(function(prev, cur) {
    return prev + cur;
  });
  
  return total;
}