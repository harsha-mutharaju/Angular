// Function declaration 
//hoisting is done

function add(a,b) {
    console.log(`Addition of ${a} and ${b} is ${a+b}`);
}

add(2,3);


//function expression  - it has no name
//anonymous
// function is referenced to a variable 
//hoisting is not allowed
let sub = function(a,b){
    console.log(`subtraction of ${a} and ${b} is ${a-b}`)
}

sub(5,2);

// IIFE - immeditely invoked function expression 
// invoke a function immediately after declaration 

(function(a,b){
    console.log(`Multipolication of ${a} and ${b} is ${a*b}`)
})(4,5);

//arrow function 
//similar to lambda functions 

var div = (a,b) => {
    console.log(`division of ${a} and ${b} is ${a/b}`)
}

div(100,10);





