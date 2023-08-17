document.getElementById('icon-bold').addEventListener('click',function(){
    const textArea = getTextAreaValue();
    
    textArea.classList.toggle('font-bold');
    
    setTextAreaValue(textArea);
})

document.getElementById('icon-italic').addEventListener('click',function(){
    const textArea = getTextAreaValue();
    
    textArea.classList.toggle('italic');
    
    setTextAreaValue(textArea);
})