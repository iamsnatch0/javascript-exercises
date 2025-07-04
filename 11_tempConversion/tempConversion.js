const convertToCelsius = function(a) {
   let resultsA = (a - 32) * 5/9
   let rounded = Math.round(resultsA * 10) / 10

   return rounded
};

const convertToFahrenheit = function(b) {
  let resultsB = (b * 9/5) + 32
  let rounded = Math.round(resultsB * 10) / 10

  return rounded
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
