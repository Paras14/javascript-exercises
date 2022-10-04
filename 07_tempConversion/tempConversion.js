const ftoc = function(f) {
  var celValue = ((f-32)*5)/9;
  return Math.round(celValue*10)/10;
};

const ctof = function(c) {
  var fehValue = ((c*9)/5)+32;
  return Math.round(fehValue *10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
