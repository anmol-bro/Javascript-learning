const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNumbers.map( (num) => num + 10 )     // automatically returns the value

const newNums = myNumbers                        //chaining 
                         .map( (nums)=> nums * 10)
                         .map( (nums) => {return nums + 1}  )
                         .filter( (nums) => nums > 40 )
console.log(newNums)
