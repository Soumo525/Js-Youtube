//How does javascript execute code + call stack


let val1 = 10
let val2 = 5
function addnum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(5,6)



//  1) Global Execution --> this
//  2) Memory Phase -->
// val1 -> undefined
// val2 -> undefined

// addnum -> defination
// result1 -> undefined
// result2 -> undefined


// Execution Phase -->

// val1 <-- 10
// val2 <-- 5
// addnum --> new variable environment + Execution thread  ( abr create hobe Memory Phase and Execution Phase)

// val1 --> undefined
// val2 --> undefined
// total --> undefined

// Execution Phase

// num1 --> 10
// num2 --> 5
// total --> 15


// +++ Call Stack +++