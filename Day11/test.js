// Control flow or logic flow

// if
const isLoggedIn = true
const temp = 41
if ( temp < 50) {
    console.log("Executed");
}
else {
    console.log("No");
}


//=== type checking , !== check negative

const score = 200
 
if ( score > 100) {
 const power = "Fly"
 console.log( `User power is ${power}`);   
}

//console.log( `User power is ${power}`);    //no run

const bal = 5000

//if (bal > 500) console.log("Run"); //not rec

// if (bal < 500) {
//     console.log("Less");
// } else if (bal < 100) {
//     onsole.log("Less");
// } else {
//     console.log( " No");
// }

const userL = true
const userD = true
const logInGoogle = false
const logInEmail = true
// if (userL && userD) {
//     console.log("Good");
// }

// if (logInEmail || logInGoogle) {
//     console.log( "  yes Good");
// }


const month = 2

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;

    default:
        break;
}