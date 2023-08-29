// Truthy 

const UserEmail = "abc@"

if (UserEmail) {
    console.log("Got user email");
}
else {
    console.log("Do not user email ");
}


const UserEmail1 = ""

if (UserEmail) {
    console.log("Got user email");
}
else {
    console.log("Do not user email ");
}
const UserEmail2 = []

if (UserEmail) {
    console.log("Got user email");
}
else {
    console.log("Do not user email ");
}


/// +++ falsy value ++++ 
// false ,0, -0, BigInt 0n, "", null, undefined, NaN


/// +++ Truthy values +++
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// false == 0 // true
// false == "" // true
// 0 == "" // true


//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator

const ice = 100
ice >= 80 ? console.log("Less") : console.log( "More ");