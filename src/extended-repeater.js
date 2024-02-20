const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  let addStr = "";
  let fullStr = "";
  
  if (addition === undefined) {
    addition = '';
  }
  
  str = String(str);
  addition = String(addition);

  // str.toString();
  // addition.toString();
  
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  let repeatTimesMinus = Number(repeatTimes) - 1;

  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  let additionRepeatTimesMinus = Number(additionRepeatTimes) - 1;
  
  if (separator === undefined) {
    separator = '+';
  }
  
  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }
  
  //Create addition
  for (let i = 0; i < additionRepeatTimes; i += 1) {
    if (i !== additionRepeatTimesMinus) {
    addStr += addition + additionSeparator;
    } else if (i === additionRepeatTimesMinus) {
    addStr += addition;
    }  
  }
  
  //Create full
  for (let i = 0; i < repeatTimes; i += 1) {
    if (i !== repeatTimesMinus) {
    fullStr += str +addStr + separator;
    } else if (i === repeatTimesMinus) {
    fullStr += str + addStr;
    }  
  }
  
  return fullStr;
}

module.exports = {
  repeater
};
