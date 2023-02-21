// document.getElementById("count-el").innerText = 5
// intialize the count as 0
//listent fot clicks on the increment button 
//increment the count variable when the button is click 
//change the count-el in the HTML to reflect the new count 

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let userName = "per"
let message = "you have three new notifications"
let messageToUser = message + " " + userName + "!"
let myName = "naor"
let greeting = "Hi, my name is "
let myGreeting = greeting + myName
let count = 0
let points = 4
let bonusPoints = "44"

let totalPoint = points + bonusPoints

console.log()

let welcomeEL = document.getElementById("welcome-el")
welcomeEL.innerText = myGreeting

welcomeEL.innerText += "👐"




function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    saveEl.textContent += " " + count + " -"
    count = 0
    countEl.textContent = 0

}

function reset() {
    count = 0
    countEl.textContent = count
}




