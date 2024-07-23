const coding = ["Js","Py","c++","Ruby"]

coding.forEach( function (i){            // the function is callback function , we dont need to give it a name
   // console.log(i)
})

coding.forEach( (val)=>{           // with arrow function
   // console.log(val)
} )

function printMe( value){
   // console.log(value)
}

coding.forEach(printMe)    // just giving the reference of the function as all the foreach loop requires is a callback function

coding.forEach( (value , index , arr) => {
  //  console.log(value , index , arr)
})


//******** forEach for Array of Objects*********//

const myCoding = [
    {
        languageName : "Javascript",
        extension : "js"
    },
    {
        languageName : "Java",
        extension : "java"
    },
    {
        languageName : "Python",
        extension : "py"
    }
]


myCoding.forEach( (element)=>{
   console.log(element.extension)
} )
