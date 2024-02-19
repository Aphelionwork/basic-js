const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newArray = [];

  function createArray(m, n) {
    for (let i = 0; i < m; i += 1) {
      newArray[i] = [];
        for (let j = 0; j < n; j += 1) {
          newArray[i][j] = 0;
        }
    }
  }
  
  createArray(rows, cols);
  
  function plusOne (w, h) {
    if (w >= 0 && w <= rows && h >= 0 && h <= cols) {
      newArray[h][w] += 1;
    }
  }  
    
  for (let w = 0; w < rows; w += 1) {
    for (let h = 0; h < cols; h += 1) {
      if (matrix[w][h] == true) {
        plusOne (w - 1, h - 1);
        plusOne (w - 1, h);
        plusOne (w - 1, h + 1);
        plusOne (w, h - 1);
        plusOne (w, h + 1);
        plusOne (w + 1, h - 1);
        plusOne (w + 1, h);
        plusOne (w + 1, h + 1);
      }  
    }
  }
  return newArray;
}

module.exports = {
  minesweeper
};
