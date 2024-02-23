const clock = document.querySelector('#clock');

clock.addEventListener('click', function () {
  setInterval(function (){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerText = date.toLocaleTimeString();
  }, 1000)
});
