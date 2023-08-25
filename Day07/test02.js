// Array 2

const heros = ["A", "B", "C"]
const dc = ["D", "E", "F"]

//heros.push(dc)
// console.log(heros);
// console.log(heros[3][1]);

// const all = heros.concat(dc)
// console.log(all);

// const all_new = [...heros, ...dc]
// console.log(all_new);


// const ano_Array = [1,2,3,[4,5,6],[6,7]]

// const real_ano = ano_Array.flat(Infinity)
// console.log(real_ano);


console.log(Array.isArray("ABC"));
console.log(Array.from("ABC"));
console.log(Array.from({name: "ACD"})); // impo

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));