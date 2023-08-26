// Object

// Singleton
// object literals

const mySym1 = Symbol("Key1")
const mySym2 = Symbol("Key2")
const abc = {
    name : "Soumo",
    "full name " : "Soumo Soumo",
    mySym1 :"mykey1",
    [mySym2] : "mykey2",
    age : 18,
    location : "Howrah",
    isLoggedIn : false,
    lastLogDay : ["Monday"]
}

// console.log(abc.name);
// console.log(abc["name"]);
// console.log(abc["full name "]);
// console.log(abc.mySym);
// console.log(typeof abc.mySym1);
// console.log(  abc[mySym2]);

// myArray = ["S","D"]

abc.age = "19"
//Object.freeze(abc)
abc.age = "20"
//console.log(abc);


abc.greeting = function(){
    console.log("Hello")
}

abc.greeting2 = function(){
    console.log(`Hello , ${this.name}` )
}
console.log(abc.greeting);
console.log(abc.greeting());

console.log(abc.greeting2());

