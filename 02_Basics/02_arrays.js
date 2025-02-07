const marvelHeroes = ["Thor", "CA", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];
console.log(marvelHeroes.concat(dcHeroes));

const newHeroes = [...marvelHeroes, ...dcHeroes];
console.log(newHeroes);

const newArr = [1,2,3,4,[5,6],[8,9,[10,11,12],13,14],15,16,17,18];

console.log(newArr.flat(Infinity));
/*
let a = "17";
console.log(typeof a);

a = Number(a)
console.log(a);
console.log(typeof a);

(Simple practice of converting data types)
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

