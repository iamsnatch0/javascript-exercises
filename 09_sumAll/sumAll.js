const sumAll = function(minValue, maxValue) {
    if(!Number.isInteger(minValue)|| !Number.isInteger(maxValue)) return "ERROR";
    if(minValue < 0 || maxValue < 0) return "ERROR";
    let sum = 0;
    for (let i = minValue; i <= maxValue; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
