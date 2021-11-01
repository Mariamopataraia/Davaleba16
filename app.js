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

let text = 'BULSHIT';
let lower = text.toLowerCase();
// let upper = text.toUpperCase();
console.log(text.toLowerCase());

// Task #4

let number = [1, 5, 7, 4, 6, 9, 10];
let evens = number.filter(function(x) {
    if (x % 2 === 0 || x === 0) {
      return x;
    }
  })
console.log(evens);

// Task #5

const myArray = [
    {
    name: "Mawi",
    word: 'ok bye',
    }
];
function myCredentials(myArray, name) {
    return myArray.find(element => element.word === "ok bye");
}
// let found = credentials.find(element => element > 10);
// console.log(credentials.find(name => word === "ok bye"));
console.log(myCredentials(myArray, "Mawi"));

