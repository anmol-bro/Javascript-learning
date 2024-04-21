console.log("2">1); // javascript converts the string into integers for comparison if data inside the string is integer 
console.log("02">1);

console.log(null > 0); // null treated as 0
console.log(null == 0); //special case - Nan
console.log(null >= 0);// null treated as 0

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2"==2);
console.log("2"===2); //strict check (value with datatype)
console.log(2===2);
