(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {
        firstName: "rick",
        lastName: "sanchez"

    }
    console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
   person.sayHello = function(){
       console.log(`Hello from ${person.firstName} ${person.lastName}`)
   }
   person.sayHello()
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shop,ind){
        let discount = 0;
        if(shop.amount>200){
            discount =.12
        }

        let lastamount = shop.amount - (shop.amount * discount)
        console.log(`${shop.name} has and amount of ${shop.amount} they get a discount of ${discount} all together thats ${lastamount}`)
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books =[]
    books.push({
        title:"bad names for a book ",
        author:{
            aFirstName: "firstname",
            aLastName : 'lastname'
        },
        titles:"harry pot",
        author2:{
            aFirstName: 'bob',
             aLastName : 'smith'
        },titles2:"A Tree Grows In Brooklyn",
        author3:{
            aFirstName: 'Betty ',
             aLastName : 'Smith'
        },titles4:"I cant come up with book names",
        author4:{
            aFirstName: 'Sill ',
             aLastName : 'Smith'
        },titles5:"I cant come up with book names",
        author5:{
            aFirstName: 'Sill ',
             aLastName : 'Smith'
        },


    })
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

for (const book of books){
    console.log(`
    Book# ${books.indexOf(book)+1}
    Title ${book.title}
    Author:${book.author.aFirstName} ${book.author.aLastName}
  `),console.log(`
    Book# ${books.indexOf(book)+2}
    Title ${book.titles}
    Author:${book.author2.aFirstName} ${book.author2.aLastName}
  `),console.log(`
    Book# ${books.indexOf(book)+3}
    Title ${book.titles2}
    Author:${book.author3.aFirstName} ${book.author3.aLastName}
  `),console.log(`
    Book# ${books.indexOf(book)+4}
    Title ${book.titles4}
    Author:${book.author4.aFirstName} ${book.author4.aLastName}
  `),console.log(`
    Book# ${books.indexOf(book)+5}
    Title ${book.titles5}
    Author:${book.author5.aFirstName} ${book.author5.aLastName}
  `)
}

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();