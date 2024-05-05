const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros)  // appends the array into the array 

// console.log(marvel_heros) 

// const all_heros = marvel_heros.concat(dc_heros) // concat returns value in a new array
// console.log(all_heros)

const all_new_heros = [...marvel_heros,...dc_heros] // this is called spread

//console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // instead of infinity you can provide the depth as a number 
console.log(real_another_array);

console.log(Array.isArray("Anmol"))
console.log(Array.from("Anmol"))
console.log(Array.from({name : "Anmol"})) // interesting case - not able to convert 

let Score1= 100
let Score2=200
let Score3 = 300

console.log(Array.of(Score1,Score2,Score3))



