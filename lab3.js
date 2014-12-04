/*
    Edit The function below!
*/
var celsiusToFarenheit = function (celsius) {
    // add your code below, don't forget to return!
    
};


/* 
    This is a block comment
    The below will test your function!
    If you don't get it, don't worry, just focus on the 
    function above and try to run the program
*/
var test = function (celsius, farenheit) {
    console.log("The input is " +celsius);
    console.log("The output should be "+ farenheit);
    console.log("The output is " + celsiusToFarenheit(celsius));
    
    // We will eventually cover this
    console.log(farenheit === celsiusToFarenheit(celsius));
    console.log();
};

// This is the invocation of our test function
test(30,86);
test(40,104);
test(20, 68);
test(17.5, 63.5);