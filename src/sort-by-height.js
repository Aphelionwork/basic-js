const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexArray = [];
  let n;
    
  const sortArray = arr.filter(height => height !== -1).sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] == -1) {
        n = indexArray.push(i);
      }
    }  
    
    for (let j = 0; j < indexArray.length; j += 1) {
      n = sortArray.splice(indexArray[j], 0, -1);
    }

    return sortArray;
}

module.exports = {
  sortByHeight
};
