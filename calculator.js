function addText(num){
    prevText = document.getElementById("topTextBox").value;
    newText = prevText + String(num);
    document.getElementById("topTextBox").value = newText;
}

function clearCalc(){
    document.getElementById("topTextBox").value = "";
}
function backspace(){
    prevText = document.getElementById("topTextBox").value;
    newText = prevText.slice(0,-1);
    document.getElementById("topTextBox").value = newText;
}
function evaluateCalc(){
    evalStuff = document.getElementById("topTextBox").value;
    result = eval(evalStuff);
    document.getElementById("topTextBox").value = result;
}
function checkEnterThenEval(element){
  if (event.key == "Enter"){
    EnterButton.click()
  }
}
