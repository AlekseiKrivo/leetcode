/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join(''), 10);
    num = x > 0 ? num : num * -1;
    return num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31) ? 0 : num;
};