/*script that splits string input into an array of characters
* reverses the array order and joins it back together to return a reversed string
*/


function reverseString(str) {
  return str.split("").reverse().join("");
}