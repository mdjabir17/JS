const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

const myNewDate = new Date(2003, 5, 4);
console.log(`My date of Birth is: ${myNewDate.toDateString()}`);
