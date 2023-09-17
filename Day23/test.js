//Class constructor and static

//ES6

class User {
    constructor (username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const aa = new User("aa","AA@", "123")

console.log(aa.encryptPassword());
console.log(aa.changeUsername());


/// inheritance


class User1 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`);
    }
}

const tea = new Teacher("Soumo","ab@", "123")
tea.addCourse()

const coffe = new User1("UUU","aa@", "123")

coffe.logMe()


console.log(tea instanceof Teacher);



/// Statio

class User2 {
    constructor (username){
        this.username = username
    }

    logmee(){
        console.log(`Username : ${this.username}`);
    }
    static  createId(){
        return `123@`
    }
}

const soumo = new User2("SOUMO")
//console.log(soumo.createId());



class abc extends User2{
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const phone = new abc("SS", "aaa@")
console.log(phone.createId());