// For loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("Good");
    }
    //console.log(element);

}

for (let i = 0; i < 10; i++) {
    //console.log(`Outer loop ${i}`);
   for (let j = 0; j < 10; j++) {
   //console.log(`Inner loop value ${j} and inerloop ${i}`);
    //console.log( i + '*' + j + '=' + i*j);
   }
    
}


let myArr = ["A" , "B" , "C"]
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break amd continue

for (let index = 0; index <= 20; index++) {

    if (index == 5) {
       // console.log("Found 5");
        break;
    }
    //console.log(`value of index ${index}`);
    
}

for (let index = 0; index <= 20; index++) {

    if (index == 5) {
        console.log("Found 5");
        continue
    }
    console.log(`value of index ${index}`);
    
}