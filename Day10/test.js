// Scope level and mini hoisting

function one(){
    const userName = "Soumo"
    function two() {
        const web = "You"
        console.log(userName);
    }
    //console.log(web);
    two()
}
//one()

if (true) {
    const userName1 = "Soumo"
    if (userName1 == "Soumo") {
        const web1 = " you"
        //console.log(userName1 + web1);
    }

    //console.log(web1); error
}

//console.log(userName1); eeror



/// +++  interesting +++
console.log(add1 (1));
function add1(num){
    return num +1
}

// diff 
console.log(add2(3));
const add2 = function (num) {
    return num +2
}

