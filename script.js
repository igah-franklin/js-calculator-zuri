'use strict'
// calculator with
// addition
// subtraction
// multiplication
// division features NO FRONT END

let operationSigns = {
    plus:'+',
    minus:'-',
    mult:'*',
    divide:'/'
}
let operationSignsFromUser;

function add(){
    let sum =0;
    // for(let i=0; i<arguments.length; i++){
    //     console.log(arguments[i], '*****')
    //     sum+=arguments[i]
    // }
    [...arguments].forEach(element => {
        operationSignsFromUser = '+'
        if (operationSignsFromUser == operationSigns.plus) sum+=element
    });
    console.log('======', sum)
}
add(5,60)

function subtract(){
    let args = [...arguments];
    operationSignsFromUser = '-'
    return args.reduce(function(prev, curr){
        return prev - curr
    })
    
}
function multiply(){
    let args = [...arguments];
    operationSignsFromUser = '-'
    return args.reduce(function(prev, curr){
        return prev * curr
    })
    
}
function divide(){
    let args = [...arguments];
    operationSignsFromUser = '-'
    return args.reduce(function(prev, curr){
        return prev / curr
    })
    
}
console.log(subtract(6,5))
console.log(multiply(6,5))
console.log(divide(6,5))



