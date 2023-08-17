const sizeTextArea = getTextAreaValue();

document.getElementById('size').addEventListener('change',function(event){
    let sizeValue = event.target.value;
    sizeTextArea.style.fontSize = sizeValue + 'px';
})

/* 
    nb: here the event is the changing of the text size numbers from the numeric input field. Its value is used along with the keyword px to set the fontSize value of the textarea.
*/