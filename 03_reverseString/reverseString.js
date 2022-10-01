/*const reverseString = function(str) {
    var tempStr = '';
    for(var i=-1; i>=(str.length * (-1)); i--){
        tempStr += str.substr(i,1);
    }
    return tempStr;
};
*/
const reverseString = function(str) {
    var arrayStr = str.split("");
    arrayStr.reverse();
    return arrayStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
