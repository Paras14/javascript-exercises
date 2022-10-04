const removeFromArray = function(array, ...elements) {
    /*var index = array.indexOf(element);
    array.splice(index,1);
    return array;*/
    for(const element of elements){
        var index = array.indexOf(element);
        if(index !== -1){
            array.splice(index,1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
