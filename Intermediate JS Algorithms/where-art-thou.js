//function that looks through collection array for matching property and value pairs

function whereAreYou(collection, source) {
  var arr = [];
  var idxCollectionMatch = [];
  var sourceKeys = Object.keys(source);

  //take the object keys from source and compare to collection

  //loop through collection and if it hasOwnProperty of sourceKey[j]
  // return the bool of the query
  function hasAllProps(collection, source, idxCol) {  
    for (var j = 0; j < sourceKeys.length; j++) {
      if (!collection[idxCol].hasOwnProperty(sourceKeys[j])) {
        return false;
      }
    }
    return true;       
  }
  
  for (var i = 0; i < collection.length; i++) {
    if (hasAllProps(collection, source, i)) {
      for (var k = 0; k < sourceKeys.length; k++) {
        if (collection[i][(sourceKeys[k])] == source[(sourceKeys[k])]) {
          arr.push(collection[i]);
          break; //only need to add to the arr once if there's matching keys
        }
      }
    }
  }
  
  return arr;
}