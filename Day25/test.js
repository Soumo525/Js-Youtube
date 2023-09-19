const obj = {
    username: "Abc"
}

// console.log(Math.PI);
const abc = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(abc);

const chai = {
    name: " Chai",
    price: 300,
    isAva: true,
    oderChai : function(){
        console.log("Do not wrok");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// Object.defineProperty(chai,'name',{
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
   
} 