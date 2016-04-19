//function that checks if the predicate 'pre' is truthy on all elements in collection

function truthCheck(collection, pre) {
  // Is everyone being true?
  var numHasKey = 0;

  
  //loop through each obj in collection
  for(var i = 0; i < collection.length; i++) {
    if(collection[i][(pre)] !== undefined && collection[i][(pre)] !== null && 
       collection[i][(pre)] !== 0 && collection[i][(pre)].length > 0 || collection[i][(pre)] === true) {
      numHasKey += 1;
    }
  }
  console.log(numHasKey + " " + collection.length);
  return numHasKey == collection.length;

}

truthCheck([{"single": "double"}, {"single": NaN}], "single");