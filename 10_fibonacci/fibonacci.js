const fibonacci = function(num) {
    if(num<=0){
        return "OOPS";
    }
    let a = 1, b = 1, fb = 0;
    for(let i = 1; i<=num; i++){
        if(i<=2){
            fb = 1;
        }
        else{
            a = b;
            b = fb;
            fb = a + b;
        }
    }
    return fb;
};

// Do not edit below this line
module.exports = fibonacci;
