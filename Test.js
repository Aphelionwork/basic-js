function getCommonCharacterCount(string1, string2) {
  let newArray=[];
  let array1 =  string1.split('');
  let array2 =  string2.split('');
  console.log(array1);
  console.log(array2);
  array1.forEach(function (element){
  console.log(element,"элемент из первого массива" );
        if (array2.includes(element)) {
        newArray.push(element);
        delete array2[array2.indexOf(element)];
        //console.log(array2.indexOf(element), "индекс из второго массива");
        console.log(newArray, "создаваеммый массив");
        console.log(array2, "обновленный второй массив");
        }  
  });
 

console.log(newArray);
console.log(newArray.length);
}

getCommonCharacterCount('abca', 'xyzbac');


 /*
   let newArray = []; 
  let i,j;
  let array1 =  string1.split('');
  let array2 =  string2.split('');
  //console.log(array1);
  //console.log(array2);
      for (i=0; i<array1.length; i++) {
        //console.log(array1[i], "первый массив");
        for (j=0; j<array2.length;j++) {
          //console.log(array2[j], "второй массив");
          if (array2[j] === array1[i]){
          newArray.push(array1[i]);
          //console.log(newArray);
          }
          else { console.log('нет совпадения');
          };
        }; 
      }
  //console.log(Array.from(new Set(newArray)).length);
  return Array.from(new Set(newArray)).length */