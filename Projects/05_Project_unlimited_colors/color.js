//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let hexColor = '#'
    for(let i = 0;i<6;i++){
    hexColor += (hex[Math.floor( Math.random()*10 + 6)])
    }
    return hexColor;
}


let intervalId

const startChangingColor = function(){
    let changeBg = function(){ 
        document.querySelector('body').style.backgroundColor = randomColor()
    }
    if(!intervalId){ //this condition is to make sure that only on instance of set interval is running 
        intervalId = setInterval( changeBg ,1000)
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null //space saving - better code
}


document.getElementById('start').addEventListener('click', startChangingColor)

document.getElementById('stop').addEventListener('click', stopChangingColor)

