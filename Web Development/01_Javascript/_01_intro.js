// to print 
console.log("Kaise Ho, JavaScript");
// decalring variable -> we dont have to define variable type
// let keyword
let a; // undefined
// console.log(a); -> undefined
a = 10;
a = 10.1;
a = "Hello I am a String";
a = "Hello I am also a string";
// console.log("Variable contains", a);

// variable type :
// primitive type : number, String, Boolean, null, Symbol

// if else, loops : these syntaxes are similar to java.
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// code for is prime
let number = 19;
let flag = true;
for(let i = 2; i <= number -1; i++){
    if(number % i == 0){
        flag = false;
        break;
    }
}

if(flag == true){
    console.log(number, "is a prime number");
}
else{
    console.log(number, "is not a prime number");
}

