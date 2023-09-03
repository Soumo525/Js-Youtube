const randomNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessesSlot = document.querySelector('.guesses')
const lastResultSlot = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const hover = document.querySelector('.resultParas')

const p = document.createElement('p')


let preG = []
let numG = 1
let playGame = true 


function validG(gu) {
    
}