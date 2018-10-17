const keys = window.addEventListener('keydown',click)
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {(button.addEventListener('click',store))});

let enteredValue=[];
let total=0;
let nextNumber=0;
let i=0;
let firstNumberCheck=1;
let operator="";
let afterEqual=0;

var math ={
    '+': (x,y) => {return x+y},
    '-': (x,y) => {return x-y},
    '%': (x,y) => {return x/y},
    '*': (x,y) => {return x*y}
};

function click(e){
    for(j=0;j<10;j++){
        if(event.key === j.toString()){
            console.log(event.key);
            document.getElementById(j.toString()).click();
        }
    }
    if(event.key === "+"){
        console.log(event.key);
        document.getElementById("+").click();
    }
    if(event.key === "-"){
        console.log(event.key);
        document.getElementById("-").click();
    }
    if(event.key === "%"){
        console.log(event.key);
        document.getElementById("%").click();
    }
    if(event.key === "*"){
        console.log(event.key);
        document.getElementById("*").click();
    }
    if(event.key === "C" || event.key === "c" || event.key === "Escape"){
        console.log(event.key);
        document.getElementById("C").click();
    }
    if(event.key === "="|| event.key==="Enter"){
        console.log(event.key);
        document.getElementById("=").click();
    }

}

function store(e){
    if(e.srcElement.id === "+"||e.srcElement.id === "-"||e.srcElement.id === "%"||e.srcElement.id === "*"||e.srcElement.id === "="||e.srcElement.id==="C"){
        
        if((operator==="+"||operator==="-"||operator==="%"||operator==="*"||operator==="=")&& firstNumberCheck===0 &&e.srcElement.id!=="="&& afterEqual===0){
            nextNumber= enteredValue.join("");
            let answer = operate(total,nextNumber ,operator);
            screen.innerHTML = answer;
            total=answer;
            enteredValue=[];
            i=0;
            operator = e.srcElement.id;
        }else if(e.srcElement.id ==="="){
            nextNumber= enteredValue.join("");
            let answer = operate(total,nextNumber ,operator);
            screen.innerHTML = answer;
            total=answer;
            enteredValue=[];
            i=0;
            afterEqual=1;
        }else if(afterEqual===1){
            operator=e.srcElement.id;
            afterEqual=0;
        }else if(e.srcElement.id==="C"){
            enteredValue=[];
            total=0;
            nextNumber=0;
            i=0;
            firstNumberCheck=1;
            operator="";
            afterEqual=0; 
            screen.innerHTML="";
        }
        else{
            total= enteredValue.join("");
            i=0;
            enteredValue=[];
            firstNumberCheck=0;
            operator = e.srcElement.id;
        }
    }else{
        enteredValue[i] = e.srcElement.id;
        i++;
        screen.innerHTML= enteredValue.join("");
        console.table(enteredValue);
}
}
function operate(total,nextNumber,operator){
console.log (math[operator](parseInt(total), parseInt(nextNumber)));
return math[operator](parseInt(total), parseInt(nextNumber));
}