const display = document.getElementById("display");
const history = document.getElementById("history");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
    history.innerText = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        const expression = display.value;
        const result = eval(expression);

        history.innerText = expression + " =";
        display.value = result;

    }catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
        append(e.key);
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }
});