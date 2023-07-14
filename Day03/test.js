let score = "525"
let score01 = "525abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

let valueInNumber01 = Number(score01)
console.log(valueInNumber01); // NaN


// "33" => 33
// "43abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let isLoggedIn01 = ""

let booleanIsLoggedIn01 = Boolean(isLoggedIn01)
console.log(booleanIsLoggedIn01);

// 1 => true ; 0 => false
// "" => false
// "soumo" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);// 33
console.log(typeof(stringNumber)); // string