
"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(x) {
     return x === true;
}
function isFalse(y){
return y === false;
}
function isEven (input1){
    return input1 % 2 === 0
}
function isEqual (input2,input23){
    return input2 == input23
}
function isIdentical (input3,input34){
    return input3 === input34
}
function addOne (input4){
   return parseFloat(input4) +1;
}
function not (input5){
    return  !input5;
}
function or (input5){
 return  input5 || input5
}
function and (input6,input7){
 return input6 && input7
}
function concat (input8,input9){

    return (input8.toString() + input9.toString())
}