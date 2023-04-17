const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  if (str.length === 17){
  let regexp = /[a-f0-9]{2}[-]{1}[a-f0-9]{2}[-]{1}[a-f0-9]{2}[-]{1}[a-f0-9]{2}[-]{1}[a-f0-9]{2}[-]{1}[a-f0-9]{2}/gi;
  let matches_array = str.match(regexp);
      if (Array.isArray(matches_array)) {
      return true;
      //console.log(matches_array);
      } else {
      return false; 
      //console.log("false1"); 
      }
  }else{
    return false;
    //console.log("false2");
  }
}
module.exports = {
  isMAC48Address
};
