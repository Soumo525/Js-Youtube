//Prototype 

// let myName = "Soumo       "

// console.log(myName.tureLength);

let myHero = ["A","B","C"]
let power = {
    A : "AAA",
    B : "BBB",

    getSpiderPower : function(){
        console.log(`hi ${this.A}`);
    }
}


Object.prototype.soumo = function(){
    console.log(` soumo is present in all object`);
}

//power.soumo()
//myHero.soumo()


Array.prototype.heySoumo = function(){
    console.log(`hi soumo`);
}

//myHero.heySoumo()
//power.heySoumo() // error



//Inheritance

const User = {
    name : "soumo",
    email: "abc@"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // old

// new 
Object.setPrototypeOf(TeachingSupport, Teacher)


let anoUser = "aaaaaaaaaa    "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anoUser.trueLenght()