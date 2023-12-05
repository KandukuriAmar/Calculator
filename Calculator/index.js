//Calculator Functions

const display=document.getElementById('display');

function addTodisplay(val){
    display.value+=val;
}

function ClearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(e){
        display.value="Error";
        errorTimeout = setTimeout(() => {
            display.value = "";
        }, 2000);
    }
    
}