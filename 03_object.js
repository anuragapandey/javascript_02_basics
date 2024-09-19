//file name = node 02_basics/03_object.js

// singleton

// object literals
//Object.create
//myArray = ["a","r"]

const mySym = Symbol("key1")

const JsUser ={
    name:"anurag",
    "full name":"anurag pandey",
    mySym:"key1",
    age:22,
    location:"mumbai",
    email:"nikhilpandey.1510@gmail.com",
    isLoggedIn :false,
    LastLoginDays:["mondey","friday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser["mySym"])

JsUser.email = "a2pandey.com"
//Object.freeze(JsUser);
JsUser.email = "a2pandey0708.com"
console.log(JsUser)

JsUser.greeting =function(){
    console.log("hello ji aman");

}
JsUser.greetingtwo =function(){
    console.log(`hello ji aman,${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
