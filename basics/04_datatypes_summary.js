// ********* PRIMITIVE *********************

// 7 TYPES - String , Number , Boolean , Null, undefined , Symbols , BigInt 

// Dynamically Typed Language  - No Need to define the type

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const newId = Symbol('123')
console.log(id === newId)

const BigNumber =646377365747884n



// ************* NON PRIMITIVE (REFERANCE)***********

//     Array, Object, Function

const heros = ['Shaktiman','hulk','nagraaj'];

let myObj = {
    name : 'Anmol' ,
    age : 23
}

const myFunction = function(){
    console.log('Hello World')

}


/*typeof  data type 

Type	     typeof return value	Object wrapper
Null	     "object"	            N/A
Undefined	 "undefined"	        N/A
Boolean	     "boolean"	            Boolean
Number	     "number"	            Number
BigInt	     "bigint"	            BigInt
String	     "string"            	String
Symbol	     "symbol"           	Symbol
array        "object"
*/

// STACK (Primitive) -  gets the copy  , Heap (Non-Primitive) - gets the Reference of original value

let myName = 'Anmol Kumar'
let anotherName = myName
anotherName = 'Shivanshu'

console.log(myName)
console.log(anotherName)

let userOne = {
    email : 'anmol@google.com',
    upi : 'anmol@oksbi'
}

let userTwo = userOne
userTwo.email = 'shivanshu@google.com'

console.log(userOne.email)
console.log(userTwo.email)
















