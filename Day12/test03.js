// Filter map and reduce

//const abc = ["AA", "BB", "CC", "DD"]
 
// const aaa = abc.forEach( (item) => {
//     console.log(item);
// });

// console.log(aaa); // for each no return



// const myNum = [1, 2, 3, 4]

// const newNum = myNum.filter( (num) => num > 2)

// console.log(newNum);


// const lll = []

// lll.forEach( (num) => {
//     if (num > 2) {
//         lll.push(num)
//     }
    
// });
// console.log(lll);


let myArr = [
    {
     studenName: "Z",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "A",
     studenClass: 6,
     studenSection: "a",
    },
    {
     studenName: "B",
     studenClass: 7,
     studenSection: "a"
    },
    {
     studenName: "C",
     studenClass: 9,
     studenSection: "a",
    },
    {
     studenName: "D",
     studenClass: 4,
     studenSection: "a"
    }
];

let stu = myArr.filter( (aaa) => aaa.studenClass === 6)
//console.log(stu);
stu = myArr.filter( (aaa) => aaa.studenSection === 'a')
//console.log(stu);
stu = myArr.filter( (aaa) => {
    return aaa.studenClass === 6 
})
//console.log(stu);

// map

const myNum = [1,2,3,4,5,6]

//const newa = myNum.map( ( num ) => num +10)

//console.log(newa);

const newww = myNum
                    .map( (num) => num * 10)
                    .map( (num) => num + 1) 
                    .filter( (num) => num >= 30)
//console.log(newww);   


// reduce

//const iniValue = 0

// const myTotal = myNum.reduce( function(acc,curval) {
//     console.log(`${acc} and ${curval}`);
//     return acc + curval
// }, 0)

const  myTotal = myNum.reduce( (acc,curr) => acc + curr,0)

//console.log(myTotal);

const shop = [
    {
        itemN : "js",
        price : 99,
    },
    {
        itemN : "Python",
        price : 199,
    },
    {
        itemN : "c++",
        price : 299,
    }
]

const price = shop.reduce( (acc, item) => acc + item.price,0) 
console.log(price);