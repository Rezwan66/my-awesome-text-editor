const myTextArea = getTextAreaValue();
// MAKE LEFT
document.getElementById('left').addEventListener('click', function () {
    myTextArea.style.textAlign = 'left';
})
// MAKE CENTERED
document.getElementById('center').addEventListener('click', function () {
    myTextArea.style.textAlign = 'center';
})
// MAKE RIGHT
document.getElementById('right').addEventListener('click', function () {
    myTextArea.style.textAlign = 'right';
})
// MAKE JUSTIFIED
document.getElementById('justify').addEventListener('click', function () {
    myTextArea.style.textAlign = 'justify';
})

/* 
    nb: we used if else condition for font-styling(bold,italic,underlined) because text can be all those things at the same time. But there can only be one text alignment at a time.
*/