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

function isEven(input){
    if (typeof input == 'number') {
        if (input % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    else if (typeof input == 'string'){
        if (isNaN(Number(input)) == false){
            if (input % 2 === 0){
                return true;
            } else {
                return false;
            }
        } 
        else {
            return false;
        }
    }
    else if (typeof input == 'boolean'){
        return false;
    } 
    else {
        return false;
    }
}