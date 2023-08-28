// THIS and arrow function

const user = {
    userName : "Soumo",
    price : 100,
    welcomeMessage : function () {
        console.log(`${this.userName}, Welcome`); // curent contest ref
        console.log(this);
    }

}

// user.welcomeMessage()
// user.userName = "SAM"
// user.welcomeMessage()

//console.log(this);


// function abc(){
//     console.log(this);
// }
// abc()


// const abc = function (){
//     let userName = "Soumo"
//     console.log(this.userName);
// }
const abc = () => {
    let userName = "Soumo"
    console.log(this.userName);
}
//abc()


// const add3  = (num3,num4) => {
//     return num3 + num4
// }
//console.log(add3(3,4))

const add3  = (num3,num4) => (num3 + num4)


console.log(add3(3,4))