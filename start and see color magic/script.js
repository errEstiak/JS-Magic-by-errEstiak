function randomColor (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  let startInt
  document.querySelector('#start').addEventListener('click', function(){
    const colorGen = function(){
      document.body.style.backgroundColor = randomColor();
    }
    if(!startInt){
      startInt = setInterval(colorGen, 1000)
    }
  })

  document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(startInt)
    startInt = null
  })