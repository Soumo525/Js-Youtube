// Date and time 
// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23) // month start 0 in js
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
    
})

