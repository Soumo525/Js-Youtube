// Stack (primitive), Heap(Non-primitive)

let myName = "Soumo"
let anoName = myName
anoName = "Dhali"
console.log(myName);
console.log(anoName);

let user = {
    email :" abc@gamil.com"
}

let user2 = user

user2.email = "xyz@gami.com"
console.log(user);
console.log(user2);