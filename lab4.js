/*
    Edit The functions below!
    I did the first one for you
*/
var add = function (number1, number2) {
    return number1 + number2;
    
};

var subtract = function (number1, number2) {
    // don't forget to return!
    
};

var multiply = function (number1, number2) {
    // don't forget to return!
    
};

var divide = function (number1, number2) {
    // don't forget to return!
    
};


/* 
    This is a block comment
    The below will test your function!
    If you don't get it, don't worry, just focus on the 
    function above and try to run the program
*/
var test = function (input1, input2, output, func) {
    console.log("The input is " + input1 + "," + input2);
    console.log("The output should be " + output);
    console.log("The output is " + func(input1, input2));
    
    // We will eventually cover this
    console.log(output === func(input1, input2));
    console.log();
};

// This is the invocation of our test function
test(1, 2, 3, add);
test(7, 5, 2, subtract);
test(2, 2, 4, multiply);
test(12, 3, 4, divide);