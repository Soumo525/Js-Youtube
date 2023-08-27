//Functions with objects and array
 // rest operator
 function calCartPrice(...num1){
    return num1
}

//console.log(calCartPrice(2,9,8));

function calCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calCartPrice(2,9,8,7));

const User = {
    UserName: "ABC",
    price: 12
}

function handle(any){
    console.log(`UserName is ${any.UserName} and price is ${any.price}`);
}

// handle(User)

handle({
    UserName:"ASSDASAS",
    price:456
})


const myarr = [100,200,300]

function return2ndValue(getArr){
    return getArr[1]
}
console.log(return2ndValue(myarr));
