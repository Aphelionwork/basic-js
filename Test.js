function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  
    //stackoverflow
  if (date instanceof Date === false)
  {
    console.log("Invalid date!");
    return "Invalid date!";
  } 

    let month = date.getMonth()+1;
    let season = '';

      switch (month) {
      case 12:
      case 1:
      case 2:
        season = 'winter';
        break;
      case 3:
      case 4:
      case 5:
        season = 'spring';
        break;
      case 6:
      case 7:
      case 8:
        season = 'summer';
        break;
      case 9:
      case 10:
      case 11:
        season = 'autumn';
        break;
      }
      return season;
   
}

//getSeason(new Date(2025, 02, 22, 23, 45, 11, 500));
getSeason("fefef");