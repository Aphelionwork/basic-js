const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfDigits = Array.from(String(n), Number);
  let i=0;
  let j=1;
  for (x=1; x<arrayOfDigits.length;x++) {
    if (arrayOfDigits[i]===arrayOfDigits[j]){
      i++;
      j++;
    } else {   
        if (arrayOfDigits[j]>arrayOfDigits[i]) {
        arrayOfDigits.splice(i, 1);
        } else{
        arrayOfDigits.splice(j, 1);
        }
        x=arrayOfDigits.length
        //console.log(Number(arrayOfDigits.join('')))
        return Number(arrayOfDigits.join(''));
    }  
  }
}

module.exports = {
  deleteDigit
};
