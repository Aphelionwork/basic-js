const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr;
  let sum = '';
  let result = {};
  arr = str.split('');
      for (let i = 0; i < arr.length; i += 1) {
        let a = arr[i];
          if (result[a] != undefined) {
          result[a] += 1;
          }
          else {
          result[a] = 1;
          }
      }
    for (let key in result) {
      let a = result[key];
      let b = key;
        if (result[key] === 1) {
          a = '';
        }
      sum = sum.concat(a,b);
     }
      return sum;
  }

module.exports = {
  encodeLine
};
