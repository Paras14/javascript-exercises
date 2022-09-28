const repeatString = function(stringValue, repeats) {
    if(repeats<0){
        return 'ERROR';
    }
    else if(repeats === 0){
        return '';
    }
    
    let tempString = "";
    for(let i = 0; i < repeats; i++){
        tempString += stringValue;
    }
    return tempString;
};

// Do not edit below this line
module.exports = repeatString;
