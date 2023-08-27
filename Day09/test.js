// Functions and parameter



function sayName(){
    console.log("H");
    console.log("I");
    console.log("A");
}
//sayName()

function addTwo(num1, num2){
console.log( num1 + num2 );
}

// addTwo()

// addTwo(3,4)

function addTwo(num1, num2){
//   let result = num1 + num2
//   return result
return num1 + num2 
    }

const result = addTwo(3 ,4)
// console.log( result);

function logMessage(userName = "SAM"){
    if(userName == undefined){
        console.log("Please Enter a User Name ");
        return
    }
    return `${userName} just log`
}

//console.log(logMessage("Soumo"));
//console.log(logMessage());
console.log(logMessage("Soumo"));

