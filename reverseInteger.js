//The following solution signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//This environment does not allow you to store 64-bit integers (signed or unsigned).


var reverse=function(x) {
    const sign = Math.sign(x);
    const result = sign * String(Math.abs(x)).split(''),reverse(),join('');
    const limit = Math.pow(2,31);
    if(result<=-limit || result>limit)return 0;
    return result;
};