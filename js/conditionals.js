"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color,){
//     if(color === 'red'){
//        return  console.log("apples are red");}
//     else if (color === 'orange') {
//         return console.log("carrots are orange")
//     }  else if (color === 'yellow') {
//         return console.log("The sun is yellow")
//     }  else if (color === 'blue')
//              return console.log("The sea is blue")
//         else if (color === 'green')
//             return console.log("grass is green")
//         else {
//             return console.log("I dont know that color")
//     }







// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];{
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let analyzeColor =(prompt("whats your fav color"))
// switch(analyzeColor) {
//     case "red":
//         console.log("bricks are red");
//         break;
//     case "blue":
//         console.log("the sea is blue");
//         break;
//     case "green":
//         console.log("grass is green")
//         break
//     case "yellow":
//         console.log("the sun is yellow")
//         break
//     default:
//         alert(analyzeColor + " i dont know that color ");
//         break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let analyzeColor =(prompt("Whats your favorite color?"))
switch(analyzeColor) {
    case "red":
        alert("Bricks are red");
        break;
    case "blue":
        alert("The sea is blue");
        break;
    case "green":
        alert("Grass is green")
        break
    case "yellow":
        alert("The sun is yellow")
        break
    default:
        alert(analyzeColor + " I dont know that color ");
        break;
}
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(total) {
    if (luckyNumber === 0){
        return ( 0 )}

    else if (luckyNumber === 1) {
        return ((total *.10))
    }
    else if (luckyNumber === 2 ) {
        return ((total *.25))
    }
    else if (luckyNumber === 3) {
        return ((total *.35))
    }
    else if (luckyNumber === 4 ) {
        return (( total *.50))
    }
    else if (luckyNumber=== 5){
        return (total)
    }
    else
        return (total)

}

calculateTotal()

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
let total =prompt(`what was you total`)
console.log(calculateTotal(total))
alert(`your lucky number is ${luckyNumber}`)
alert(` your total before the discount was ${total} `)
alert(`your bill after the discount is ${total-(calculateTotal(total))}`)


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function plusH (uNumber){
    return uNumber+100

}
plusH()
let uNumberpick = confirm(`would you like to type number`)
if (uNumberpick === true) {
  let uNumber =  prompt(`type a number`)

if (uNumber %2===0) {
    alert(`this number is even`)
    alert(`your number plus 100 is ${plusH(uNumber)}`)
    if(uNumber>0){
        alert (`your number is positive`)}
        else if (uNumber <0){
            alert(`your number is negative`)
        }
else if(uNumber %2!==0){
    alert (`your number was odd`)}
if(uNumber<0){
    alert (`your number is negative`)}
else if (uNumber>0){
    alert(`your number is positive`)}
}
}
else if (uNumberpick === false){
    window.close()}





