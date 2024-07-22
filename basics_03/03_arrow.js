const user = {
    username:'Anmol',
    price:99,
    welcomeMsg : function(){
        console.log(`${this.username} ,  Welcome to our website`); // this is used for current context -- within the scope of object
        console.log(this)
    }
}

//user.welcomeMsg()
// user.username = 'Tanu'
// user.welcomeMsg()
//console.log(this) // if we run the same line globally  in browser , you will get windows object but in node environment {}


//************  */
// function chai(){
//     let username ='Anmol'
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username ='Anmol'
//     console.log(this.username)
// }
// chai()

// +++++++++ ARROW FUNCTION +++++++//
const chai = () =>{
    let username ='Anmol'
    console.log(this.username)
     console.log(this)
}
//chai()

// const addTwo = (num1,num2)=> {        //explicite return 
//     return num1 + num2
// }


const addTwo = (num1,num2) => (num1 + num2) // implicite return -- no need to write return keyword 
                                            // if wrapped in {} we have to write return , with () no need
 
const obj = ()=>({username :'ANMOL'}) // if want to return obj using {} wrap it with ()

console.log(addTwo(3,4))


