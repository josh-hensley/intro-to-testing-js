// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    return isNaN(input) == true && typeof input === "string" ? "Hello, " + input + "!" : "Hello, World!";
}

function isFive(input){
    return input == 5 || String(input).toLowerCase() == "five" ? true : false;
}