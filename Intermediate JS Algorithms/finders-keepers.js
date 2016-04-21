//function that callback's a function to filter an array of numbers

function find(arr, func) {
  var num = 0;
  
  var filtered = arr.filter(func);
  num = filtered[0];
  
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
