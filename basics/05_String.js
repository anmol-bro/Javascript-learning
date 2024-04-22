const name = 'Anmol'
const age =22

//console.log(name + age )
 
console.log(`hello my name is ${name} and my age is ${age}`)    //  STRING INTERPOLATION

const gameName = new String('Anmol-pandey')
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newGameName = gameName.substring(0,4)
console.log(newGameName);

const anotherString  =   gameName.slice(-3,2)
console.log(anotherString)

const newStringone = "  anmol "
console.log(newStringone.trim())

const url = "https://anmol.com/anmol%20pandey"
console.log(url.replace('%20','-'))
console.log(url.includes('anmol'))

console.log(gameName.split('-'))
console.log(gameName.blink())




