const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(matrix)
{ 
  if (!Array.isArray(matrix))
  { console.log("false");
    return false;}
  else
  {
    let letterArray =[];   
    for (i = 0; i < matrix.length; i++)
    {
      if (typeof(matrix[i]) === "string")
      {
        let massiveElement = matrix[i].trim();

        let UpperMassiveElement;
        if (massiveElement[0] == massiveElement[0].match(/[a-z]/i))
        {
        UpperMassiveElement = massiveElement[0].toUpperCase();
        }
        if (typeof(UpperMassiveElement) === "string")
        {
        letterArray.push(UpperMassiveElement);
        letterArray.sort();
        }
      }  
    }
    console.log(letterArray.join(''));
    return letterArray.join('');
  }
  //console.log(letterArray.join(''));
}


module.exports = {
  createDreamTeam
};
