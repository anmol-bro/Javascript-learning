// immediate invoke function expression (IIFE)
// we use it when we have to excute the function with no global pollution , immidiately after start of application , like connecting database

(function chai(){                              //named iife
    console.log('DB CONNECTED')
})()        ;                               // this () is iife


(() => {                                      //unnamed iife
    console.log('DB CONNECTED 2')     
})();                                    //semi colon is must to stop the function work


((name)=>{
    console.log(`Hi ${name}`);
})('Anmol')
