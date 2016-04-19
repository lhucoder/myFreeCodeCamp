//function that converts numbers into roman numerals

function convertToRoman(num) {
  //M e D i C a L  X a V I e r
  
  var answerArr = [];
  var answer = "";
  //Create list for possible Roman Numerals
  var onesNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tensNumerals = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundNumerals = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  
  //push("M") while num - 1000 > 1000
  while (num >= 1000) {
    answerArr.push("M");
    num -= 1000;
  }
  //push the value for hundreds place, tens, and ones placeholder
  answerArr.push(hundNumerals[Math.floor(num / 100) - 1]);
  num %= 100; //recover the remaining left over after hundreds operation
  answerArr.push(tensNumerals[Math.floor(num / 10) - 1]);
  num %= 10; //recover remaining left over after tens operation
  answerArr.push(onesNumerals[num - 1]);
  
  answer = answerArr.join("");
  return answer;
}