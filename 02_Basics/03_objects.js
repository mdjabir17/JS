
const mySym = Symbol("key1");

const personalDetails = {
    name : "Jabir",
    [mySym] : "mykey1",
    age : 21,
    email : "jabirkhorajiya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(personalDetails);
console.log(personalDetails["name"]);
console.log(personalDetails["age"]);
console.log(personalDetails["email"]);
console.log(personalDetails[mySym]);


Object.freeze(personalDetails);
personalDetails.age = 28;  // can't change because of freeze statement

personalDetails.email = "jabirkhorajiya@google.com" //can't change because of freeze statement

console.log(personalDetails);


