//node 02_basics/03_object_part2_.js

//const tinderUser = new Object()  //(it is a singleton object)
const tinderUser ={}  //(it is a non singleton object)

tinderUser.id ="123abc"
tinderUser.name= "aman"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"amandeep",
            lastname: "pandey",
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4:"b"}
const obj4 ={5: "a", 6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(object.key(tinderUser));
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));
