


const lastdiplayvalue = document.getElementById("last-value");
const currentdisplayvalue = document.getElementById("current-value");


const allclear = document.getElementById("all-clear");
const del = document.getElementById("delete");
const equals = document.getElementById("equals");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator")



console.log(lastdiplayvalue,currentdisplayvalue);


function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

function operate(operator,x,y){
    if(operator == '+'){
        add(x,y);
    }
    if(operator == '-'){
        subtract(x,y);
    }
    if(operator == '*'){
        multiply(x,y);
    }
    if(operator == '/'){
        divide(x,y);
    }
    else{
        console.log("invalid operator");
        return -1;
    }

}

