function getTextAreaValue(){
    const textArea = document.getElementById('text-input');
    const textAreaValue = textArea.value;
    return textAreaValue;
}

function setTextAreaValue(newValue){
    const textArea = document.getElementById('text-input');
    textArea.value = newValue;
}