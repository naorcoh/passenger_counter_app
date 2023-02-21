let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

let calculation = 0

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    // Call the correct function when the user clicks on one of the buttons
    console.log("add")
    // Perform the given calculation using num1 and num2
    calculation = num1 + num2
    console.log(calculation)
    // Render the result of the calculation in the paragraph with id="sum-el"
    sumEl.textContent += "\n" + calculation


}
function subtract() {
    // Call the correct function when the user clicks on one of the buttons
    console.log("subtract")
    // Perform the given calculation using num1 and num2
    calculation = num1 - num2
    console.log(calculation)
    // Render the result of the calculation in the paragraph with id="sum-el"
    sumEl.textContent += "\n" + calculation

}
function divide() {
    // Call the correct function when the user clicks on one of the buttons
    console.log("divide")
    // Perform the given calculation using num1 and num2
    calculation = num1 / num2
    console.log(calculation)
    // Render the result of the calculation in the paragraph with id="sum-el"
    sumEl.textContent += "\n" + calculation


}
function multiply() {
    // Call the correct function when the user clicks on one of the buttons
    console.log("multiply")
    // Perform the given calculation using num1 and num2
    calculation = num1 * num2
    console.log(calculation)
    // Render the result of the calculation in the paragraph with id="sum-el"
    sumEl.textContent += "\n" + calculation

}


// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


