const reverseString = function(a) {
    let splitStr = a.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = splitStr.join("");

  return joinStr;

};

// Do not edit below this line
module.exports = reverseString;
