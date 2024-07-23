const coding = ["js","py","rb","sf"]

/*const values = coding.forEach( (val)=>{    // does not return anything just print
    console.log(val)
} )

console.log(values)                           // does not return anything just print
*/

/******** FILTER *********/
const myNums = [1,2,3,4,5,6,7,8,9]

myNums.filter( (num)=> num > 5 );

const newNums = myNums.filter( (num)=> num > 5 )    // remember this that it is a explicit way of arrow function

console.log(newNums)

// const newNums2 = myNums.filter( (num)=>{
//     return num >5                                  //same as before but  here we must write return keyword as we have opened the scope - implicite
// } )







