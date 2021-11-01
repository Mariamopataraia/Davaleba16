// Task #1

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