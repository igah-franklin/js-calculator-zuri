'use strict'
// calculator with
// addition
// subtraction
// multiplication
// division features NO FRONT END

let signs = {
    plus:'+',
    minus:'-',
    mult:'*',
    divide:'/'
}

console.log(signs.plus)

function add(){
    console.log(arguments)
    console.log([...arguments])
    let sum =0;
    // for(let i=0; i<arguments.length; i++){
    //     console.log(arguments[i], '*****')
    //     sum+=arguments[i]
    // }
    [...arguments].forEach(element => {
        console.log(element, '?????')
        sum+=element
    });
    console.log('======', sum)
}
add(5,60)


