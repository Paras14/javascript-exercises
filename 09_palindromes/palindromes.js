const palindromes = function (str) {
    str = str.toLowerCase();
    str_test = str.replace(/[^a-z]/gi, '')
    str_cmp = str_test.split('').reverse().join('');
    return (str_test === str_cmp);
};

// Do not edit below this line
module.exports = palindromes;
