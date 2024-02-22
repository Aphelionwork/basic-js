const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  
  for (let i = 0; i < domains.length; i += 1) {
  let newArray =  "." + domains[i].split(".").reverse().join(".");
  console.log(newArray); 
   
  let str = newArray;    
    while (str.includes('.')) {
      let count = obj[str];

        if (count) {
          obj[str] = count + 1;
        } else {
          obj[str] = 1;
        }
      
      let index = str.lastIndexOf('.');
      str = str.slice(0, index);
    }  
  }
    return obj;
  }

module.exports = {
  getDNSStats
};
