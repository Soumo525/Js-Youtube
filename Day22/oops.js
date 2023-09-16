// javascript and classes

// OOP

// Object
// collection of properties and methods
// toLowerCase

// why use OOP


// parts of OOP

// Object literal

// Constructor function
// Prototypes
// Classes
// Instances (new, this)


// 4 pillars

// Abstraction 
// Encapsulation 
// Inheritance 
// Polymorphism

/// oop

const user = {
    username: "Soumo",
    loginCount: 9,

    getUserDetails: function(){
        console.log("Got it user details");
    }
}

//console.log(user.loginCount);

//console.log(user.getUserDetails());


//Constructor function

const date = new Date() // new

function User(username,loginCount,islogg){
    this.username = username
    this.loginCount = loginCount
    this.islogg = islogg
    
    return this
}

// const userOne = User("Soumo", 525, true)
// const userTwo = User("Chai", 334,false) // overwrite kora di6a
const userOne = new User("Soumo", 525, true)
const userTwo = new User("Chai", 334,false)
//console.log(userOne);
console.log(userOne.constructor);


