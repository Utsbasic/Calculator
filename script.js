// Write JavaScript c
let zero = true;
function appendToDisplay(value){
    if(zero==true){
    document.getElementById('display').value='';
    zero=false;
    }
      document.getElementById('display').value += value; 
}
function cleardisplay(){
    document.querySelector("#display").value="00";
    zero=true; 
}
function deleteLast(){
    let display=document.getElementById('display').value;
    document.getElementById('display').value= display.substring(0,display.length-1);
}
function calculateResult(){
    let result = eval(document.querySelector("#display").value);
    document.querySelector("#display").value=result;
}