//High Order Array loops

// for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    //console.log(i);
}

const Hi = "Hello World!"

for (const ab of Hi) {
    //console.log(`${ab}`);
}


// Map

const mapNew = new Map()

mapNew.set('In',"India")
mapNew.set('In1',"India1")
mapNew.set('In2',"India2")

//console.log(mapNew);


for (const [key,value] of mapNew) {
    //console.log(key, "-", value);
}


const myObj = {
    'g1' : "ABC",
    'g2' : "gdg"
}

// for (const [key,value] of myObj) {  //myObj is not iterable
//     console.log(key, "-", value);
// }


/// for in


const myObj1 = {
    js : "javas",
    cpp : "C++",
    rd : "ruby"
}

for (const key in myObj1) {
    //console.log(key);
    //console.log(`${key} Shortcut is for ${myObj1[key]}`);
}


const pp = ["js", "ABC"]

for (const key in pp) {
   //console.log(key);

   //console.log(pp[key]);
}



// for each

const cc = [ "A","B", "C", "D",]

cc.forEach(function(value) {
    //console.log(value);
});


cc.forEach((value) => {
   // console.log(value);
});

function PrintMe(value) {
    //console.log(value);
}

cc.forEach(PrintMe)
    


cc.forEach((item ,index,arr) => {
    //console.log(item,index,arr);
});

const mycode = [
    {
        lann : "BEN",
        lannL : "WB"

    },
    {
        lann : "HIN",
        lannL : "UP"

    },
    {
        lann : "TAM",
        lannL : "TA"

    },
]

mycode.forEach((item) => {
    console.log(item.lannL);
});