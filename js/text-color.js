const colorTextArea = getTextAreaValue();

document.getElementById('input-color').addEventListener('change',function(event){
    let colorValue = event.target.value;
    colorTextArea.style.color = colorValue;
})