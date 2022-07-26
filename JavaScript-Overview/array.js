function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);  

  //Filter
  function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer); 