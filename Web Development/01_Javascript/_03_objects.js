// Objects in javaScript are called in diffrent language by diffrent names
// python -> dictionary
// java -> hashmap
// javascript -> Object

// definition
// Object -> group of key : value pair
// key : Value -> property
// Key : function -> method
let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "Manhatten",
        state: "New York"
    },
    age: 35,
    isAvenger: true,
    movies: ["First Avenger", "Winter Soldier"],
    sayHi: function (){
        console.log("cap say's hi");
    }
};

// Get methods in Objects
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies);
cap.sayHi();

// SET/UPDATE
// ways to set in javaScript objects
cap.age = 32;
cap.isAvenger = false;
cap.friends = ["Tony", "Bruce", "Peter"];
// console.log(".....................................");
// console.log("Cap", cap);

// DELETE
// way to delete value and Method by using delete keyword

delete cap.address;
// console.log(".....................................");
// console.log("Cap", cap);

delete cap; // we can't delete the whole object using delete keyword
//console.log("...........................");
//console.log(cap);

// access every key value pair using for loop
// FOR LOOP IN OBJECTS

for(let key in cap)
    console.log(key, " : ", cap[key]);
    // note down key is a variable and to access whatever in variable with square bracket.

let propKey = "age";
console.log("...........")
console.log(propKey, " : ", cap[propKey]);
console.log("age : ", cap["age"]);