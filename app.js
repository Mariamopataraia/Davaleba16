// Task #1 - ფუნქცია

// function number(a, b) {
//   return a * b;  
// }
// const number = function number(a, b) { 
// }
// console.log(number);
// const x = function (a, b) {return a * b};
// console.log(x);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(50));

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }   else {
        return false;
    }
}
console.log(isEven(getRandomInt(50)));

// Task#2 - ვალუტა

// var str1 = 'EUR';
// function getCurrencySymbol(str) {
//     return str.replace("€", "");
//     return curr.replace(/[\d\., ]/g, '');
//      Number(curr.replace("€", ""));
//     // 
// }
// console.log(getCurrencySymbol(str1));

var str1 = 'GEL';

function getCurrencySymbolFromCode(str) {
  return str.replace("₾", "");
}
console.log(getCurrencySymbolFromCode(str1));

function getCurrencySymbolFromCode(GEL) {
    if (str1 == GEL) {
        return "₾";
    }   else if (str1 == USD) {
        return "$";
    }   else if (str1 == EUR) {
        return "€";
    }
}
console.log(getCurrencySymbolFromCode(str1));

// Task#3 - UpperCase

var text = 'BULSHIT';

var lower = text.toLowerCase();

// var upper = text.toUpperCase();

console.log(text.toLowerCase());