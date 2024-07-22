// for of

const arr = [1,2,3,4,5]
for (const i of arr) {
   // console.log(i)   
}


const greeting = "Hello World!"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`)
}

//Map -- no duplicate , remembers the order

const map = new Map()

map.set('IN','India')
map.set('USA','United states of America')
map.set('Fr','France')
//console.log(map);

for (const [key  ,value] of map) {            // [key , value] is known as destructuring 
      // console.log(key + "-:" + value);
      
}

const myObj= {
   game1 : 'ABC',
   game2 : 'xyz'
}

//for (const [key , value] of myObj) {   // not iteratable , error will occour
   //console.log(key + "-:" + value);
//}

