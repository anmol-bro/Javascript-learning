const myObj = {
    js : "Javascript",
    cpp : "c++",
    rb: "ruby"
}

//for in 

for (const key in myObj) {
   // console.log(`${key} is shortcut for ${myObj[key]}`)
}

// let's check 'for in'  loop for arrays

const arr = ['js','cpp','rb']
for (const i in arr) {
   // console.log(i)       // this will not give the value directly but gives the indexes(keys)
    console.log(arr[i])
}

