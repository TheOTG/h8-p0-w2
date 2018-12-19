/*
Logic Challenge - X dan O
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

function xo(str) {
    var countX = 0;
    var countO = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'x') {
            countX++;
        }
        if(str[i] === 'o') {
            countO++;
        }
    }

    if(countX === countO) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true