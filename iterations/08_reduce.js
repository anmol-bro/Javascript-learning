const myNums = [1,2,3]
const sumWithInitial = 0

const myTotal = myNums.reduce((accumulator , currentValue) => //accumulator will get the value of (accumulator + currentValue) ,only for the first time we need to give it intialization
//console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`)
  accumulator + currentValue  , 0)

 console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Daal",
        price : 99
    },
    {
        itemName : "Chawal",
        price : 199
    },
    {
        itemName : "Chini",
        price : 59
    },
    {
        itemName : "Chana",
        price : 89
    }
]

const priceToPay = shoppingCart.reduce( (acc , item)=> acc + item.price , 0 )

 console.log(priceToPay);