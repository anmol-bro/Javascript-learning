function sayMyName(){
console.log("A");
console.log("N");
console.log("M");
console.log("o");
console.log("L");
}

//sayMyName()

function addTwoNumber(a,b){            //a,b called parameters
    //console.log(a+b);
    return a+b;                        //return is last executable code inside the function
}
addTwoNumber(5,6)                    //a,b called arguments
 // either you store the function call or print on console


 function userLoggedIn(userName){
    if(!userName){
            console.log('Enter the username')
            return
    }
    return `${userName} , just logged in`
 }

 console.log(userLoggedIn("Anmol"))


 function calculateCartPrice(...num1){              // ... is known as rest or spread operater on the basis of their usecases
      return num1;
 }

 console.log(calculateCartPrice(200,500,1000))    // returns array of values ... using loop you can add the elements



 const user = {
    username : "Anmol",
    Price : 199
 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`)
 }

 handleObject(user)


 const myNewArray = [100,200,500,400]

 function secondelement(array){
    console.log(`second element of the array is ${array[1]}`)
 }
 secondelement(myNewArray)