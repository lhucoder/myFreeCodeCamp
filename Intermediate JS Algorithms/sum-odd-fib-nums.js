//function that sums all odd fibonacci numbers

function sumFibs(num) {

  var prev = 1;
  var ans = 1;
  var prev2 = 0;
  var sumOdd = 1;
  
  //basic fibonacci algorithm
  for (var i = 1; i < num; i++) {  
    ans = prev + prev2;
    prev2 = prev;
    prev = ans;
    //only sum if value is odd
    if (ans % 2 == 1 && ans <= num) {
      sumOdd = sumOdd + ans;
    }
  }
  
  return sumOdd;
}