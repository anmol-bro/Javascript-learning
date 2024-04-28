// Array
const myArray = [0,1,2,3,true,'Anmol']
const myHeros = ["Shaktiman","nagraj"]
const myArray2 = new Array(1,2,3,4)


//console.log(myArray[1]) ;


//Array Methods
/*

myArray.push(6)//appends the value in the end of the array
myArray.pop()//deletes the last value of an array , no need to give parameters 
myArray.unshift(0) // inserts the element in the start of the array by shifting others , not good for big size array
myArray.shift() //deletes the first value of array , no need to give parameters 
*/
/*
console.log(myArray.includes(5));
console.log(myArray.indexOf(true));
*/


// const newArr =  myArray.join()
// console.log(newArr)


// slice , spice - INTERVIEW

const myn1 = myArray.slice(1,3) // returns the piece of array except last given index , does not change original array
console.log(myn1)
console.log(myArray)

const myn2 = myArray.splice(1,3) //retruns values with last index given , also deletes those values from the original array 
console.log(myn2)
console.log(myArray)
