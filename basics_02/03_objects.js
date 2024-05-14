//singleton
//Object.create

const mySym = Symbol("mykey1")

// object Literals - keys , values
const JsUser = {
    name:"Anmol",
    "full name":"Anmol Kumar Pandey",
    [mySym]:"mysymboldata",
    age:18,
    location:"Jaipur",
    isLoggedIn:false,
    lastLoginDays:["Mon","Tue"],
    email:"anmol@google.com"
}
/*
console.log(JsUser.location)
console.log(JsUser["location"])
console.log(JsUser["full name"]) // this is the only way to access 
console.log(JsUser[mySym]) // now this will work as symbol type . if we provide key without [] it will be symbol type
*/
/*
 JsUser.email="anmol@microsoft.com"
 Object.freeze(JsUser) // after using this nothing will get changed in object further
 JsUser.email="anmol@act21.io"
 console.log(JsUser)
 */
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

//console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())