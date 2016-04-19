//function that sums all prime numbers including the argument number

function sumPrimes(num) {
  
  var primeArr = [];
  
  while(num > 1) {
    for (var i = num - 1; i > 1; i--) { // i ranges from 2 to num-1
      if (num % i !== 0) { //is a prime if mod is > 0 for all i
        if (i == 2 && num % i > 0) { //if it passes last criteria (i = 2) it is a prime
          primeArr.push(num); //collect prime numbers         
        }
      } else {
        break; //break out of loop move to next num upon first non-prime
      }
    }
    num--;
  }
  
  primeArr.push(2); //2 gets a free pass
  
  var primeSum = primeArr.reduce(function(a, b) { return b + a;} ); //add up all prime numbers
  
  
  return primeSum;
}