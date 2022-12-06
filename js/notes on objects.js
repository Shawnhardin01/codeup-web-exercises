let rey = Object()
console.log(rey)
rey ={};
console.log(rey)
rey.petType = "dog"
rey.breed = "german shepherd"
rey.size = "medium"
console.log(rey.breed)
console.log(rey.petType)
console.log(rey.size)
const dolly = {
    name : "dolly",
    gender : "female",
    breed : "bulldog"
}
dolly.petType ="dog";
console.log(dolly);
const candy ={
    name: "candy",
    petType :"dog",
    gender : "female",
    breed : "pug",
    owner:{
        name : {
            firstName : "Joe" ,
            lastName : "Schmoe"
        } ,
        address : "565 Lopez St.",
        phone : "210 555 5555"

    }
}
console.log(candy);
console.log(candy.owner.name);

const pets = [];
pets.push(rey);
pets.push(dolly);
pets.unshift(candy);
rey.name= "Rey"
console.log(pets);
console.log(pets[1]);

candy.favoriteToys = [
    "tennis ball",
    "stick",
]
console.log(pets[0].favoriteToys[1]);

function doDogStuff (myPets){
    for(const petIndex in myPets){
        const pet = myPets[petIndex];
        if(pet.favoriteToys === undefined){
            console.log("Calling ASPCA...");
        }else {
            console.log(pet.favoriteToys);
        }
    }
}
doDogStuff()
rey.favoriteToys = ["rock"]
// doDogStuff(pets);
// function flip(){
//     console.log("The dog flips");
// }
rey.flip = function(){
    console.log(this.name + " flip")
};
rey.flip()

candy.flip= rey.flip;
candy.flip();


// candy.flip = flip;
// candy.flip();


