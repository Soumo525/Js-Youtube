class User {
    constructor (email,pass){
        this.email = email
        this.pass = pass
    }
    get pass(){
        return this._pass.toUpperCase()
    }

    set pass(value){
        this._pass = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
}

const abc = new User("abc@","abc")
console.log(abc.email);


