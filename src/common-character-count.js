const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  let newArray=[];
  let array1 =  string1.split('');
  let array2 =  string2.split('');
  //console.log(array1);
  //console.log(array2);
  array1.forEach(function (element){
  //console.log(element,"элемент из первого массива" );
        if (array2.includes(element)) {
        newArray.push(element);
        delete array2[array2.indexOf(element)];
        //console.log(array2.indexOf(element), "индекс из второго массива");
        //console.log(newArray, "создаваеммый массив");
        //console.log(array2, "обновленный второй массив");
        }  
  });
 

//console.log(newArray);
return newArray.length;
}

module.exports = {
  getCommonCharacterCount
};
