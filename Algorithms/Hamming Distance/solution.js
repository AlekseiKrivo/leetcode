/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    var a = x.toString(2).split('');
    var b = y.toString(2).split('');
    
    let distantion = 0;
    
    if(a.length > b.length) {
        let bLength = b.length;
        for(let i = 0; i < a.length - bLength; i++) {
            b.unshift(0);
        }
    }
    else if(b.length > a.length) {
        let aLength = a.length;
        for(let i = 0; i < b.length - aLength; i++){ 
            a.unshift(0);
        }
    }
    
    for(let n = 0; n < a.length; n++) {
        if(a[n] != b[n]) {
            distantion++;
        }
    }
    
    return distantion;
};