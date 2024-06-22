// {} is known as scope 
// var workes outside of the scope which is not a good thing

if (true){
    let a=5
    const b=10
    var c=15
}
//console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username ='Anmol'
    function two(){
        const website ='youtube'
        console.log(username)
    }
   // console.log(website)        //  can't be accessed outside of it's scope 
    two()
}
one()



if (true){
    const username = 'Anmol'
    if(username === 'Anmol'){
        const website = ' Youtube'
        console.log(username + website)
    }
   // console.log(website) // out of the scope
}
//console.log(username)   // out of the scope




//******************* INTERESTING  ***********//


// addOne(5)    It will work
function addOne (num){
    return num + 1
}

addOne(5)


//addTwo(6) it will not work
const addTwo = function(num){  //another way of declaring and holding function into variable .... also called hoisting, variable in js are so powerful that they can hold any thing.
    return num+2
}
addTwo(6)

