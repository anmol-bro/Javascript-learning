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

//console.log(newNums)

// const newNums2 = myNums.filter( (num)=>{
//     return num >5                                  //same as before but  here we must write return keyword as we have opened the scope - implicite
// } )


const books = [
    {
        title: "Book One",
        genre: "History",
        publish: 1996,
        edition : 2008
    },
    {
        title: "Book Three",
        genre: "Science",
        publish: 1990,
        edition : 2005
    },
    {
        title: "Book Four",
        genre: "History",
        publish: 2018,
        edition : 2023
    },
    {
        title: "Book Five",
        genre: "History",
        publish: 1956,
        edition : 2014
    },
    {
        title: "Book Six",
        genre: "History",
        publish: 1987,
        edition : 1998
    },
    {
        title: "Book Seven",
        genre: "History",
        publish: 2001,
        edition : 2008
    }
]

//console.log(books.filter( (bk)=>(bk.publish> 1990) )); // can iterate on object arrays
//console.log(books.filter( (bk)=>(bk.publish> 2000 && bk.genre=="History") ));






