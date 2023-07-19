// String 


const name = "Soumo"
const surName = "xyz"

// console.log(name + surName + " hello"); // Backdated

//console.log(`Hello my name is ${name} ${surName}`); // string interpolation // Morden 

const game = new String ('Soumo')
const gameNew = new String ('Soumo-xyz')
//console.log(game[0]);



// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt(2));

// console.log(game.indexOf('u'));

// const newString = gameNew.substring(0, 4)
// console.log(newString);

const anoString  = gameNew.slice(0, 4)
console.log(anoString);

const newString1 = "     soumo     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://soumo.com/soumo%20xyz"

console.log(url.replace('%20', '-'))

console.log(url.includes('soumo'));

const abc = "soumo-xyx-xyz"

console.log(abc.split('-'));


