"use strict"
// console.log("Hello from external Javascript")
// alert("Welcome to my website")
// let color = prompt("What is your favorite color" )
// alert(`I like the color ${color} too`)

let littleMermaid = prompt("how many days did you rent Little Mermaid")
let brotherBear = prompt("how many days did you rent Brother Bear")
let hercules = prompt("how many days did you rent this Hercules")

let price = ((parseInt(littleMermaid)+parseInt(brotherBear)+parseInt(hercules))*3)

console.log(price, typeof  price)

alert(`${price}$ is how much it will cost`)