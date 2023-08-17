// MAKE BOLD
let isBold = false;
document.getElementById('icon-bold').addEventListener('click', function () {
    const textArea = getTextAreaValue();

    if (!isBold) {
        textArea.classList.add('font-bold');
        isBold = true;
    } else {
        textArea.classList.remove('font-bold');
        isBold = false;
    }

    // setTextAreaValue(textArea);
})

// MAKE ITALIC
let isItalic = false;
document.getElementById('icon-italic').addEventListener('click', function () {
    const textArea = getTextAreaValue();

    if (!isItalic) {
        textArea.classList.add('italic');
        isItalic = true;
    } else {
        textArea.classList.remove('italic');
        isItalic = false;
    }

    // setTextAreaValue(textArea);
})

// MAKE UNDERLINE
let isUnderlined = false;
document.getElementById('icon-underlined').addEventListener('click',function(){
    const textArea = getTextAreaValue();

    if(!isUnderlined){
        textArea.classList.add('underline');
        isUnderlined = true;
    }else{
        textArea.classList.remove('underline');
        isUnderlined = false;
    }

    // setTextAreaValue(textArea);
})

/* nb: We are not needing to use the setTextAreaValue(textArea) function at all since we are directly changing the text area's attribute or class name here, so nothing to do with/ no need to set the new .value of the text area.!!! */