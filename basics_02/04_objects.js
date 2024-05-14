//const tinderUser = new Object{}           -- singleton
const tinderuser = {}
tinderuser.id = '123'
tinderuser.name='Anmol'
tinderuser.isLoggedIn=false

//console.log(tinderuser);

const regularUser = {
    email: 'something@gmail.com',
    fullName : {
        userFullName : {
            firstName : 'Anmol',
            lastName : 'Pandey'
        }
    }
}

//console.log(regularUser.fullName.userFullName.lastName)

//*********  merge ***********
const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'c' , 4:'d'}

//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2) //{} denotes that,we are merging objects into empty object,it is optional but good to use
const obj3 = {...obj1,...obj2} //best and easy way
console.log(obj3)

//********* How data comes from database
const user = [
    {
        id : '123',
        email:'a@gmail.com'
    },
    {
        id : '124',
        email:'b@gmail.com'
    },
    {
        id : '125',
        email:'c@gmail.com'
    }
]
console.log(user[1].email)

//************* 
console.log(tinderuser)
console.log(Object.keys(tinderuser)); // returns array of all keys of an object
console.log(Object.values(tinderuser)); // returns array of all values of an object
console.log(Object.entries(tinderuser)); // returns array of array that contains key , value of an object
console.log(tinderuser.hasOwnProperty('isLoggedIn'));  // it asks wheather a key is in that object or not