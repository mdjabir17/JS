const user = {
    email : "abc@gmail.com",
    fullname : {
        username : {
            firstname : "abc",
            lastname : "xyz"
        }
    }
}

console.log(user.fullname.username.firstname);
console.log(user.fullname.username.lastname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({},obj1, obj2, obj3);
// console.log(obj4);

const obj5 ={...obj1, ...obj2,...obj3,}
console.log(obj5);


const user1 = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "a@gmail.com"
    },
    {
        id : 3,
        email : "a@gmail.com"
    },
]

console.log(user1);


const tinderUser = {}

tinderUser.id = "123";
tinderUser.email = "abc@gmail.com";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


