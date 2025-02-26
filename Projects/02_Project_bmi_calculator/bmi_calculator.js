const form = document.querySelector('form');
//this use case will give us empty value;
// const height = parseInt(document.getElementById('height').value);
// const weight = parseInt(document.getElementById('weight').value);

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) 
    const weight = parseInt(document.querySelector('#weight').value) 
    const result = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the output inn results
         result.innerHTML = `<span>${bmi}</span>`
         if(bmi <18.6){
            result.innerHTML = `<span>${bmi}</span> Under weight`
         }
         else if(bmi > 18.6 & bmi < 24.9){
            result.innerHTML = `<span>${bmi}</span> Normal`
         }
         else{
            result.innerHTML =  `<span>${bmi}</span> Over weight`
         }
    }
   

})