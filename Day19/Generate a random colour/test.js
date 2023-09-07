// generate a random colour

const randomColour = function () {
    const hex = "0123456789ABCDEF"
    let colour = '#'
    for (let i = 0; i< 6; i++) {
      colour +=hex[Math.floor(Math.random() * 16)]
       
    }
    return colour;
}
// console.log(randomColour());
// console.log(Math.floor(Math.random() * 16))


let intervalId


const startchange = function () {
 if (!intervalId) {    /// update code 
  intervalId = setInterval(changeBg,1000);
 }

  function changeBg() {
    document.body.style.backgroundColor = randomColour()
  }
}


const stopchange = function () {
  clearInterval(intervalId);
  intervalId = null; /// update 
}


document.querySelector('#start').addEventListener('click', startchange)
document.querySelector('#stop').addEventListener('click', stopchange)