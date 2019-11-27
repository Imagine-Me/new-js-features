// This require node to run without browser
// install node from following link https://nodejs.org/en/download/
// node node in system variables


//Simple arrow function, with no argument passing
const function_1 = () => {
    console.log("Hello there!")
}
function_1();

//passing one argument

const function_2 = string => { // we can put argument in parenthesis also
    console.log(string);
}
function_2("Function 2");

//passing more than one argument
const function_3 = (val1, val2) => { // parenthesis required in this case
    console.log(val1, val2);
}
function_3("From", "Function 3");


/** Return in function */
// if the function have only return statement then we can omit curly bracket and return keyword as show below

//no argument
const function_4 = () => "Function 4"; //Empty parenthesis is important
console.log(function_4())
//one argument
const function_5 = string => string; //we can either user or omit parenthesis
console.log(function_5("Function 5"))
//two argument
const function_6 = (val1, val2) => val1 + val2; // parenthesis required in this case
console.log(function_6("From ", "Function 6"))