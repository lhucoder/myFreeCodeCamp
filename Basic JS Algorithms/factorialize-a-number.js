//Recursive function that will return the factorial value 'num'
function factorialize(num) {
  //0! == 1
  if (num === 0) {
    return 1;
  //for all positive numbers
  } else {
    while (num > 0) {
      return num * factorialize(num - 1);
    }
  }
}