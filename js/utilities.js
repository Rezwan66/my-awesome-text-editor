function getTextAreaValue(){
    const textArea = document.getElementById('text-input');
    const textAreaValue = textArea.value;
    return textArea;
}

function setTextAreaValue(newValue){
    let textArea = document.getElementById('text-input');
    textArea = newValue;
}