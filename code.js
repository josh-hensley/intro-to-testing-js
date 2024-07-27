// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    return isNaN(input) == true && typeof input === "string" ? "Hello, " + input + "!" : "Hello, World!";
}