const leapYears = function(year) {
    const yearDivideFour = year % 4 === 0;
    const yearDivideCentury = year % 100 === 0;
    const yearDivideFourHundred = year % 400 === 0;


    if (
        yearDivideFour && 
        (!yearDivideCentury || yearDivideFourHundred)
    ){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
