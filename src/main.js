"use strict";
exports.__esModule = true;
module.exports = function sum(value1) {
    var currentSum = value1;
    function increment(valueNext) {
        currentSum += valueNext;
        return increment;
    }
    increment.toString = function () {
        return currentSum;
    };
    return increment;
}
// console.log(sum(1)(2));
// console.log(sum(1)(2)(3));
// console.log(sum(1)(2)(3)(4));
// console.log(sum(1)(2)(3)(4)(5));