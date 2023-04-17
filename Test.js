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
        console.log(Number(arrayOfDigits.join('')))
        //return Number(arrayOfDigits.join(''));
    }  
  }
}

deleteDigit(152);