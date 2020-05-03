/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = [];
    let num = x;
    
    while(num > 0) {
        arr.unshift(num%10);
        num=num/10|0;
    }
    
    return x === 0 ? true : parseInt(arr.reverse().join('')) === x;
};