const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const baseN = 15;
  const halfLife = 5730;
  const coefficient = 0.693/halfLife;
    if (typeof(sampleActivity) === 'string'){
    sampleActivity = Number(sampleActivity);
    if (sampleActivity>0 && sampleActivity<=15){
    const relationN = baseN/sampleActivity;
      let time = Math.ceil(Math.log(relationN)/coefficient);
      //console.log(time);
      //console.log(typeof(time));
      return time;
      } else {
      //console.log("false1");
      return false;  
      }
    } else {
    //console.log("false2");
    return false;
    }
  }

module.exports = {
  dateSample
};
