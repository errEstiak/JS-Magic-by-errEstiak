const form = document.querySelector('form')

// if we initiate the variable like this
// every time the program start it will take an empty value, as at first there is no input
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
  e.preventDefault(); // prevent from default (get & post method)

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    result.innerText = 'Input a valid Num'
  }
  else if(height === '' || height < 0 || isNaN(height)){
    result.innerText = 'Input a valid Num'
  }  
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2) // so that it only show up to two decimal value
    result.innerText = `${bmi}`
  }    
})

