
let myDate = new Date(); // object type
/*
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
*/

//let myCreatedDate = new Date(2023,0,23) // 0 as month starts with 0 in js
//let myCreatedDate = new Date(2023,0,23,5,3) // hrs , minutes
// let myCreatedDate = new Date("2023-01-14") //  directly any  format date can be taken 
let myCreatedDate = new Date("01-14-2023") //this is MM-DD-YYYY format and not DD/MM/YYYY, as DD/MM/YYYY is not supported
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now();

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) // value in seconds

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
