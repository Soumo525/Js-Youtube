// Array 

const myArr = [0,1,2,3,4,5,]
// console.log(myArr[2]);

// Shallow Copy
//A shallow copy of an object is a copy whose properties share the same 
// references (point to the same underlying values) as 
// those of the source object from which the copy was made.


// Deep copy
//A deep copy of an object is a copy whose properties do not share the 
//same references (point to the same underlying values) as 
//those of the source object from which the copy was made. 


const myHeors = ["I", "A", "C"]
const myArr2 = new Array(1,2,3,4)


// Array Method

// myArr.push(6)
// myArr.push(9)
// myArr.pop()
//console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // boolean
// console.log(myArr.indexOf(5));
// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3)  // Manipulate original array
console.log("C",myArr)
console.log(myn2);