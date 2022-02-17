// Non -primitive data types -> arraya, objects, functions
function sayHi(){
    console.log("Hello from SayHI");
} // -> funcions doesnot have any return type, we can return any value of any type;
// function call
sayHi(10); // -> this is not going to throw error here;
sayHi("hello");  // -> will not throw any error
sayHi([1, 2, 3, 4, 5]); // -> will not throw any error
//console.log(num); // note it down, this is going to throw error of (num not defined)

function sayHi(params){ // -> this function will overload the above function and any call made in this entire code will be followed by this function
    console.log(params, "this is saying Hi");
}